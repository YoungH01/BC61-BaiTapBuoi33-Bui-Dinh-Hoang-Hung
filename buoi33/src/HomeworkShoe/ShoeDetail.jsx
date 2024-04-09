import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment} from 'react'
const ShoeDetail = (props) => {
  return (
    <Transition appear show={props.isOpenDetail} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeModalDetail}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <h3 className='text-xl font-semibold mb-5'>Chi tiết sản phẩm</h3>
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Tên sản phẩm
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Hình ảnh
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Số lượng
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Đơn giá
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Mô tả
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                            <tr>
                              <th className='px-6 py-4 text-lg'>{props.inforShoe.name}</th>
                              <td className='px-6 py-4'>
                                <img className="w-20" src={props.inforShoe.image} alt="" />
                              </td>
                              <td className='px-6 py-4 space-x-4'>
                                <span>{props.inforShoe.quantity}</span>
                              </td>
                              <td className='px-6 py-4'>{props.inforShoe.price}</td>
                              <td className='px-6 py-4'>{props.inforShoe.description}</td>
                            </tr>
                      </tbody>
                    </table>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
    </Transition>
  )
}

export default ShoeDetail
