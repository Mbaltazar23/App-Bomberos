import { useState, useContext } from "react";
import { Responsibility } from "../../../../../../Domain/entities/Responsibility";
import { ResponsibilityContext } from "../../../../../context/ResponsibilityContext";
import { UserConext } from "../../../../../context/UserContext";

const FireFighterResponsibilityListViewModel = () => {
    const [responseMessage, setResponseMessage] = useState("");
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [selectedResponsibilityId, setSelectedResponsibilityId] =
        useState<Responsibility | null>();
    const { operators, getAllOperators, getResponsibilitysByUser, responsibilitys, remove } = useContext(ResponsibilityContext)
    const { user } = useContext(UserConext);

    const handleDeleteResponsibility = (responsibility: Responsibility) => {
        setSelectedResponsibilityId(responsibility);
        setShowDeleteConfirmation(true);
    };

    const handleConfirmDeleteResponsibility = () => {
        if (selectedResponsibilityId) {
            deleteResponsibility(selectedResponsibilityId);
        }
        setSelectedResponsibilityId(null);
        setShowDeleteConfirmation(false);
    };

    const handleCancelDeleteResponsibility = () => {
        setSelectedResponsibilityId(null);
        setShowDeleteConfirmation(false);
    };

    const deleteResponsibility = async (responsibility: Responsibility) => {
        const result = await remove(responsibility);
        setResponseMessage(result.message);
    };

    return {
        user,
        responseMessage,
        showDeleteConfirmation,
        operators,
        responsibilitys,
        handleDeleteResponsibility,
        handleConfirmDeleteResponsibility,
        handleCancelDeleteResponsibility,
        getAllOperators,
        getResponsibilitysByUser
    }
}

export default FireFighterResponsibilityListViewModel
