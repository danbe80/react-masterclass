import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?:string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError /* 특정한 error를 발생시키게 해줌 */
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if(data.password !== data.password1) {
      setError(
        "password1", 
        {message:"password are not the same"}, 
        {shouldFocus: true} /* 커서가 즉시 에러난 입력창으로 이동 */
        );
    }
    // setError("extraError", {message: "Server offline"}); /* form 전체의 error */
  }
  console.log(errors)
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}>
        <input
        {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register(
            "firstName", 
              { 
              required: "write here", 
              validate: {
                noNico: (value) => 
                value.includes("nico") ? "no nicos allowed" : true ,
                /* "nico"라는 단어가 들어가면 error (return boolean)*/
                /* async await(비동기)로 서버와 확인하고 응답 받을 수 있음 */
              }
              }
            )
          }
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input 
          {...register("lastName", { required: "write here" })}
          placeholder="Last Name"/>
        <span>{errors?.lastName?.message}</span>
        <input  
          {...register("username", { required: "write here", minLength: 10 })}
          placeholder="Username"/>
        <span>{errors?.username?.message}</span>
        <input  
          {...register("password", { required: "write here", minLength: 5 })}
          placeholder="Password"/>
       <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password1"/>
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
