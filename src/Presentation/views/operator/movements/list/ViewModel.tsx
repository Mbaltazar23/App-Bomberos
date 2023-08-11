import { useContext, useState } from "react";
import { MovementContext } from "../../../../context/MovementContext";
import { Movement } from "../../../../../Domain/entities/Movement";
import { UserConext } from "../../../../context/UserContext";

const OperatorMovementListViewModel = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [selectedMovementId, setSelectedMovementId] =
    useState<Movement | null>();

  const { movements, getMovementsByUser, remove , products,
    trucks,
    getAllStockProducts,
    getAllTrucks, } = useContext(MovementContext);
  const {user} = useContext(UserConext)

  const handleDeleteMovement = (Movement: Movement) => {
    setSelectedMovementId(Movement);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDeleteMovement = () => {
    if (selectedMovementId) {
      deleteMovement(selectedMovementId);
    }
    setSelectedMovementId(null);
    setShowDeleteConfirmation(false);
  };

  const handleCancelDeleteMovement = () => {
    setSelectedMovementId(null);
    setShowDeleteConfirmation(false);
  };

  const deleteMovement = async (Movement: Movement) => {
    const result = await remove(Movement);
    setResponseMessage(result.message);
  };

  return {
    user,
    movements,
    products,
    trucks,
    getAllStockProducts,
    getAllTrucks,
    responseMessage,
    getMovementsByUser,
    showDeleteConfirmation,
    handleDeleteMovement,
    handleConfirmDeleteMovement,
    handleCancelDeleteMovement,
  };
};

export default OperatorMovementListViewModel;
