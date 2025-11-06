import toast from "react-hot-toast";

type NotificationType = "login" | "login_encorrect";

export const notificationApi = () => {
  const notify = (type: NotificationType) => {
    switch (type) {
      case "login":
        return toast.success("Hush kelibsiz")
        break;

      case "login_encorrect":
        return toast.error("Email yoki parol hato kiritildi");
    }
  };

  return notify;
};
