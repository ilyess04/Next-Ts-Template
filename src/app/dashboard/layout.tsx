"use client";
import { ILayout } from "@/common/interfaces";
import { PrivateRoutes } from "@/common/routes";

export default function DashboardLayout({ children }: ILayout) {
  //use navbar && sidebar of private interface dashboard
  return <PrivateRoutes>{children}</PrivateRoutes>;
}
