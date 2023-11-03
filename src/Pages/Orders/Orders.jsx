import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'; 
import { AuthContext } from '../../Providers/AuthProviders';
import axios from 'axios';
import OrdersRow from './OrdersRow';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    const url = `http://localhost:5000/orders?email=${user?.email}`;
    useEffect(() => {
     axios.get(url,{withCredentials:true})
     .then(res =>{
      setOrders(res.data);
     })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setOrders(data))
    }, [url]);
    const handleDelete = (id) => {
        Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this order!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/orders/${id}`, {
              method: 'DELETE',
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire('Deleted!', 'Your order has been deleted.', 'success');
                  const remaining = orders.filter((order) => order._id !== id);
                  setOrders(remaining);
                }
              });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Cancelled', 'Your order is safe :)', 'error');
          }
        });
      };

      // const handleOrderConfirm = id =>{
      //   fetch(`http://localhost:5000/orders/${id}`,{
      //       method:'PATCH',
      //       headers:{
      //         'content-type':'application/json'
      //       },
      //       body:JSON.stringify({status:'confirm'})
            
      //   })
      //   .then(res => res.json())
      //   .then(data => {
      //       console.log(data);
      //       if(data.modifiedCount >0){
      //           // update state
      //           const remaining = orders.filter(order => order._id !== id);
      //           const updated = orders.find(order => order._id === id);
      //           updated.status='confirm'
      //           const newOrders = [updated,...remaining];
      //           setOrders(newOrders);
      //       }
      //   })
      // }

      const handleOrderConfirm = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ status: 'confirm' }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.success) {
              // Update the order status in the frontend state
              const updatedOrders = orders.map((order) =>
                order._id === id ? { ...order, status: 'confirm' } : order
              );
              setOrders(updatedOrders);
              Swal.fire('Success!', 'Order confirmed successfully.', 'success');
            } else {
              Swal.fire('Error!', 'Failed to confirm order. Please try again.', 'error');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            Swal.fire('Error!', 'Failed to confirm order. Please try again.', 'error');
          });
      };
      
    return (
        <div>
            <h2 className='text-5xl text-center'>Your Orders:{orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map(order => <OrdersRow
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleOrderConfirm={handleOrderConfirm}
                            ></OrdersRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Orders;