import { useContext, useState } from "react";
import { User } from "../../../../../Domain/entities/User";
import { UserConext } from "../../../../context/UserContext";

const AdminUsersListViewModel = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<User | null>();
  const { users, getAllUsers, remove } = useContext(UserConext);

  const handleDeleteUser = (User: User) => {
    setSelectedUserId(User);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDeleteUser = () => {
    if (selectedUserId) {
      deleteUser(selectedUserId);
    }
    setSelectedUserId(null);
    setShowDeleteConfirmation(false);
  };

  const handleCancelDeleteUser = () => {
    setSelectedUserId(null);
    setShowDeleteConfirmation(false);
  };

  const deleteUser = async (user: User) => {
    const result = await remove(user);
    setResponseMessage(result.message);
  };

  return {
    users,
    responseMessage,
    getAllUsers,
    showDeleteConfirmation,
    handleDeleteUser,
    handleConfirmDeleteUser,
    handleCancelDeleteUser,
  };
};

export default AdminUsersListViewModel;
