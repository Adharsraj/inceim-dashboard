'use client'

import { axiosAdmin } from '@/lib/axios';
import { useGenericMutation } from '@/components/query/useGenericMutation';


export const useCreateCarousel = () => {
  return useGenericMutation<any>({
    apiCall: (data) => axiosAdmin.post("carousel", data),
    onSuccessMessage: 'Carousel Created',
    queryKeyToInvalidate:'getcarousel',
    redirectTo: "/dashboard/carousel/list"
  });
};
export const useUpdateCarousel = () => {
  return useGenericMutation<any>({
    apiCall: (data) => axiosAdmin.put(`carousel/${data.id}`, data),
    onSuccessMessage: 'Carousel updated',
    queryKeyToInvalidate:'getcarousel',
    redirectTo: "/dashboard/carousel/list"
  });
};
export const useDeleteCarousel = () => {
  return useGenericMutation<any>({
    apiCall: (data) => axiosAdmin.delete(`carousel/${data}`),
    onSuccessMessage: 'Carousel Deleted',
    queryKeyToInvalidate:'getcarousel',
  });
};


