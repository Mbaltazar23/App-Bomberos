import { useContext, useState } from "react";
import { TruckContext } from "../../../../context/TruckContext";
import { Truck } from "../../../../../Domain/entities/Truck";

const AdminTruckCreateViewModel = () => {
  const { trucks, remove, getAllTrucks } = useContext(TruckContext);
  const [responseMessage, setResponseMessage] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [selectTruckId, setSelectTruckId] = useState<Truck | null>();

  const handleDeleteTruck = (truck: Truck) => {
    setSelectTruckId(truck);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDeleteTruck = () => {
    if (selectTruckId) {
      deleteTruck(selectTruckId);
    }
    setSelectTruckId(null);
    setShowDeleteConfirmation(false);
  };

  const handleCancelDeleteTruck = () => {
    setSelectTruckId(null);
    setShowDeleteConfirmation(false);
  };

  const deleteTruck = async (truck: Truck) => {
    const result = await remove(truck);
    setResponseMessage(result.message);
  };
  
  return {
    trucks,
    getAllTrucks,
    responseMessage,
    showDeleteConfirmation,
    handleDeleteTruck,
    handleConfirmDeleteTruck,
    handleCancelDeleteTruck,
  };
};

export default AdminTruckCreateViewModel;
