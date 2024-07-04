import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {db} from "../configs/firebase-config.js";
import {useGetInfo} from "./useGetInfo";

export const useAddTransaction = () => {
    const collectionRef = collection(db, "transactions");
    const {userId} = useGetInfo();
    const addTransaction = async ({
        description,
        transactionAmount,
        transactionType
    }) => {
        await addDoc(collectionRef, {
            userId,
            description,
            transactionAmount,
            transactionType,
            createdAt : serverTimestamp()
        });
    }
    return {addTransaction};
}