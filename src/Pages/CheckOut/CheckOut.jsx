import Swal from 'sweetalert2';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleConfirmOrder = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const order = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
    };

    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertId) {
          Swal.fire({
            title: 'Success!',
            text: 'Order placed successfully!',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Failed to place order. Please try again.',
            icon: 'error',
            confirmButtonText: 'Okay',
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to place order. Please try again.',
          icon: 'error',
          confirmButtonText: 'Okay',
        });
      });
  };
    

    return (
        <div>
            <h2 className='text-2xl text-center '>CheckOut:{title}</h2>
            <form onSubmit={handleConfirmOrder}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            placeholder="name"
                            defaultValue={user?.displayName}
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date"
                            name='date'
                            className="input input-bordered"
                            required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            placeholder="email"
                            defaultValue={user?.email}
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text"
                            defaultValue={'$' + price}
                            className="input input-bordered"
                            required />

                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default CheckOut;