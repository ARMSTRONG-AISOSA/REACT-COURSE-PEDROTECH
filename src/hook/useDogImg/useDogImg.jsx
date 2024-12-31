import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import axios from "axios";

const useDogImg = () => {

    const [dataFact, setDataFact] = useState("");

    const [dogImg, setDogImg] = useState("https://images.dog.ceo/breeds/pariah-indian/The_Indian_Pariah_Dog.jpg");

    // Fetching dog data
    const {
        data: dogData,
        error: dogError,
        isLoading: dogIsLoading,
        refetch: dogRefetch
    } = useQuery({
        queryKey: ["dog"],
        queryFn: () => axios.get("https://dog.ceo/api/breeds/image/random").then((response) => response.data)
    });


    return {
        dogData,
        dogError,
        dogIsLoading,
        dogRefetch
    }

}

export default useDogImg
