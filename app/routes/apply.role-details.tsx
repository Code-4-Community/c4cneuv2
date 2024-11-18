import { type MetaFunction } from "@remix-run/node";
import RoleDetailsSection from "~/components/apply-page/role-details";
import Footer from "~/components/footer/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Role" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Role() {
  return (
    <div>
      <RoleDetailsSection />
      <Footer />;
    </div>
  );
}
