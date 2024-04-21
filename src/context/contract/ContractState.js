// require("dotenv").config();
import React, { useState } from "react"
import ContractContext from "./contractContext"
import { baseUrl } from "../../Urls";


const ContractState = (props) => {

    const contractInitial = [];

    const [contracts, setContracts] = useState(contractInitial);

    // Add a Contract
    const addContract = async (firstname, lastname, email, phone, domain, city, query) => {
        const response = await fetch(`${baseUrl}/api/contract/addcontract`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1YzI4YzAwZTkxYzMxNDY5MTNlNDliNyJ9LCJpYXQiOjE3MTMzNTM2ODV9.hm7rLEbk0sRcj5uNwOWRnRcYwCpvLUB4vy7ssJ_zueo"
            },
            body: JSON.stringify({ firstname, lastname, email, phone, domain, city, query }),
        });
        const contract = await response.json()
        setContracts(contracts.concat(contract));
    };

    
    // Get all Contracts
    const getContracts = async () => {
        // API call
        const response = await fetch(`${baseUrl}/api/contract/fetchallcontracts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1YzI4YzAwZTkxYzMxNDY5MTNlNDliNyJ9LCJpYXQiOjE3MTMzNTM2ODV9.hm7rLEbk0sRcj5uNwOWRnRcYwCpvLUB4vy7ssJ_zueo"
            },
        });
        const json = await response.json();
        console.log(json);
        setContracts(json);
    };


    // Delete a Contract
    const deleteContract = async (id) => {
        // API call
        const response = await fetch(`${baseUrl}/api/contract/deletecontract/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1YzI4YzAwZTkxYzMxNDY5MTNlNDliNyJ9LCJpYXQiOjE3MTMzNTM2ODV9.hm7rLEbk0sRcj5uNwOWRnRcYwCpvLUB4vy7ssJ_zueo"
            },
        });
        const json = response.json();
        console.log(json);

        console.log("Deleting the contract with id" + id);
        const newContract = contracts.filter((contract) => {
            return contract.id !== id;
        });
        setContracts(newContract);
    };


  return (
    <ContractContext.Provider
        value = {{ contracts, setContracts, addContract, deleteContract, getContracts }}
    >
        {props.children}
    </ContractContext.Provider>
  )
}

export default ContractState