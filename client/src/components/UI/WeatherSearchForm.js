import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import classes from "./WeatherSearchForm.module.css";

import { useForm, Controller } from "react-hook-form"; // react-hook-form


const WeatherSearchForm = (props) => {
    // react-hook-form
    const {
        control,
        setValue,
        formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues: {
            city: "",
        },
    });

    // set the city location and reset the input value after submit
    const onSubmitHandler = (data) => {
        console.log(data);
        setValue("city", "");
    };

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmitHandler)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <InputGroup className="mb-3">
                        <Controller
                            name="city"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <FormControl
                                    {...field}
                                    className={`${classes["weather-search-form"]} ${classes["weather-search-form-input"]} border border-secondary shadow-none`}
                                    placeholder="Search city"
                                    aria-label="Search city"
                                    aria-describedby="basic-addon2"
                                />
                            )}
                        />

                        <Button
                            className={`${classes["weather-search-form"]} ${classes["weather-search-form-button"]} shadow-none p-0`}
                            variant="outline-secondary"
                            id="button-addon2"
                            type="submit"
                        >
                            <InputGroup.Text className="border-0 bg-transparent">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className={`bi bi-search ${classes["weather-search-svg"]}`}
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </InputGroup.Text>
                        </Button>
                    </InputGroup>
                    {errors.city?.type === "required" && (
                        <p className={`${classes["error"]}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-exclamation-triangle"
                                viewBox="0 0 16 16"
                            >
                                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                            </svg>{" "}
                            <span className="align-middle">
                                City name is required
                            </span>
                        </p>
                    )}
                </Form.Group>
            </Form>
        </>
    );
};

export default WeatherSearchForm;
