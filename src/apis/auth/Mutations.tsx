"use client";

import { axiosAdmin } from "@/lib/axios";
import { useGenericMutation } from "@/components/query/useGenericMutation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useAuthStore } from "@/store/AuthSore";
import { useMastercardPaymentStore } from "@/store/paymentStore";

export function useloginUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setUserData } = useAuthStore(); // Access Zustand store functions
  const shippingData = JSON.parse(localStorage.getItem("shippingData") || null);
  const { paymentData } = useMastercardPaymentStore.getState();
  console.log("shippingdata", shippingData);
  console.log("paymentData", paymentData);

  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      try {
        const response = await axiosAdmin.post("user/login", {
          email,
          password,
        });
        const data = response?.data?.data;
        const accessToken = data?.accessToken;

        // Save token in Zustand store and localStorage (for persistence)
        setUserData(data, accessToken);
        localStorage.setItem("access-token", accessToken);

        return data;
      } catch (error) {
        console.log("err", error);
        throw error;
      }
    },
    onMutate: () => {
      console.log("mutate");
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
        toast.error(error.message);
      } else {
        toast.success("Welcome");
        if (shippingData || paymentData) {
          navigate("/checkout");
        } else {
          navigate("/");
        }
        await queryClient.invalidateQueries({ queryKey: ["getAgent"] });
      }
    },
  });
}

export const useCreateUser = () => {
  return useGenericMutation<any>({
    apiCall: (data) => axiosAdmin.post("user/create", data),
    onSuccessMessage: "User Created",
    queryKeyToInvalidate: "getcarousel",
    // redirectTo: "/dashboard/carousel/list"
  });
};

export const useUpdateOtp = () => {
  return useGenericMutation<any>({
    apiCall: (data) => axiosAdmin.post("user/verify", data),
    onSuccessMessage: "Otp verified",
    queryKeyToInvalidate: "getcarousel",
    redirectTo: "/login",
  });
};

export const useForgotPassword = () => {
  return useGenericMutation<any>({
    apiCall: (data) => axiosAdmin.post("user/forgot-password", data),
    onSuccessMessage: "Mail sent ,check your email",
    queryKeyToInvalidate: "getcarouselllll",
    // redirectTo: "/login"
  });
};

export const useResetPassword = () => {
  return useGenericMutation<any>({
    apiCall: (data) => axiosAdmin.post("user/reset-password", data),
    onSuccessMessage: "Password reset done ,please relogin",
    queryKeyToInvalidate: "getcarouselllll",
    redirectTo: "/login"
  });
};

