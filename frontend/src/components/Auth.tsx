import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom"
import { SignupType } from "@prathamx1204/medium-npm/dist"
import axios from "axios"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export const Auth = ({type}:{type:"signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupType>({
        name:"",
        email:"",
        password:""
    });


    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch(e) {
            alert("Error while signing up")
            // alert the user here that the request failed
        }
    }
    

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="text-3xl font-bold">
                        Create an account
                    </div>
                    <div>
                        <div className="text-slate-400">
                            {type === "signin" ? "Wanna Create New Account" : "Already have an account?"}
                            <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                                {type === "signin" ? "Sign Up" : "Login"}
                            </Link>
                        </div>
                    </div>
                    <div>
                       {type === "signup"? <LabelledInput label="Name" placeholder="John Doe.." onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                name: e.target.value
                            }))
                        }} />
                        :null}
                        <LabelledInput label="Email" placeholder="JohnDoe@Yahoo.com" onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                email: e.target.value
                            }))
                        }} />
                        <LabelledInput type="password" label="Password" placeholder="*****" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value
                            })
                        }} />
                        <div className="mt-4">
                            <button onClick = {sendRequest} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                {type}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return (
        <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-black">{label}</label>
            <input
                type={type || "text"}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
                required
            />
        </div>
    );
}
