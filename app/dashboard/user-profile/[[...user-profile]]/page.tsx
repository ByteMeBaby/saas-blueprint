import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <UserProfile
    path="/dashboard/user-profile"
    routing="path"
    appearance={{
      elements: {
        rootBox: {
          position: "fixed",
          top: "70px",
          overflow: "auto",
          height: "calc(100% - 70px)",
          width: "75%",
          boxShadow: "none",
        },
        scrollBox: {
          borderRadius: "0",
          paddingBottom: "30px",
        },
        card: {
          boxShadow: "none",
          width: "100%",
        },
        navbar: {
          borderRight: "none",
        },
        navbarButton: {
          "&:focus": {
            boxShadow: "none",
          },
        },
      },
    }}
  />
);

export default UserProfilePage;
