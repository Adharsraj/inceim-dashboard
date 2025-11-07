'use client'
import { axiosAdmin } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";




export function useGetAllCarousel() {
    return useQuery({
      queryKey: ['getcarousel'],
      queryFn: async() => {
        try {
          const response = await axiosAdmin.get("admin/carousel");
          console.log(response?.data?.data);
          return response?.data?.data;
        } catch (error) {
          console.log('err', error);
          throw error;
        }
      }
    });
  }

  export function useGetAllFeatured() {
    return useQuery({
      queryKey: ['getfeatured'],
      queryFn: async() => {
        try {
          const response = await axiosAdmin.get("admin/product/featured");
          console.log(response?.data?.data);
          return response?.data?.data;
        } catch (error) {
          console.log('err', error);
          throw error;
        }
      }
    });
  }


  export function useGetSingleCarousel(id:string) {
    return useQuery({
      queryKey: ['getcarousel',id],
      queryFn: async(id) => {
        console.log(id)
        const m = id.queryKey[1];
        try {
          if(m){
            const response = await axiosAdmin.get(`/carousel/${m}`);
            console.log(response?.data?.data);
            return response?.data?.data;
          }
          return null
        } catch (error) {
          console.log('err', error);
          throw error;
        }
      }
    });
  }
  // export function useGetAdminsById(id: any) {
  //   return useQuery({
  //     queryKey: ['getAllAdmins', id],
  //     // eslint-disable-next-line
  //     queryFn: (id) => getAdminById(id)
  //   });
  // }