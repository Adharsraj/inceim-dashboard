import { Routes, Route } from "react-router";
import { useEffect, type JSX } from "react";
import Layout from "./Layout.tsx";
import OrganizationPage from "./pages/organization/page.tsx";
import CommunicationPage from "./pages/communication/page.tsx";
import DevicesPage from "./pages/devices/page.tsx";
import LaboratoryPage from "./pages/laboratory/page.tsx";
import DashboardOverview from "./pages/overview/page.tsx";
import SecurityPage from "./pages/security/page.tsx";

// Title Wrapper Component
const TitleWrapper = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) => {
  useEffect(() => {
    document.title = `${title} | site name`;
  }, [title]);

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <TitleWrapper title="Home">
              <DashboardOverview />
            </TitleWrapper>
          }
        />

        <Route
          path="/organization"
          element={
            <TitleWrapper title="Organization">
              <OrganizationPage />
            </TitleWrapper>
          }
        />
        <Route
          path="/communication"
          element={
            <TitleWrapper title="Organization">
              <CommunicationPage />
            </TitleWrapper>
          }
        />
        <Route
          path="/devices"
          element={
            <TitleWrapper title="Organization">
              <DevicesPage />
            </TitleWrapper>
          }
        />
        <Route
          path="/laboratory"
          element={
            <TitleWrapper title="Organization">
              <LaboratoryPage />
            </TitleWrapper>
          }
        />
        <Route
          path="/security"
          element={
            <TitleWrapper title="Organization">
              <SecurityPage />
            </TitleWrapper>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
