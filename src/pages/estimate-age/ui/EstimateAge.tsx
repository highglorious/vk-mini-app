import { yupResolver } from "@hookform/resolvers/yup";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  Button,
  Div,
  Text,
  FormItem,
  FormLayoutGroup,
  Group,
  Input,
  Panel,
} from "@vkontakte/vkui";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { getAgeByName } from "@/shared/api/agify";
import { debounce } from "@/shared/lib";
import { Error } from "@/shared/ui/error";
import { NavHeader } from "@/shared/ui/nav-header";
import { FormInput, inputName, schema } from "../config";

export const EstimateAge = ({ nav }: { nav: string }) => {
  const [query, setQuery] = useState("");

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<FormInput>({
    mode: "all",
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
    },
  });
  const inputChange = debounce(() => setQuery(getValues(inputName)));

  const { ref, name, onChange } = register(inputName, {
    onChange: () => {
      schema
        .validate({ name: getValues(inputName) })
        .then(inputChange)
        .catch((error) => console.log(error));
    },
  });

  const { isFetching, isError, data } = useQuery({
    queryKey: ["age", query],
    queryFn: ({ signal }) => getAgeByName(query, { signal }),
    refetchOnWindowFocus: false, //dont refetch on window focus
    enabled: Boolean(query),
    placeholderData: keepPreviousData, // preserve prev fetched data before new data is fetched
  });

  if (isError) return <Error />;

  return (
    <Panel nav={nav}>
      <NavHeader>Возраст по имени</NavHeader>

      <Group>
        <FormLayoutGroup mode="vertical">
          <form onSubmit={(e) => e.preventDefault()}>
            <FormItem
              htmlFor={inputName}
              top="Имя"
              status={isValid || !isDirty ? "default" : "error"}
              bottom={errors.name?.message}
            >
              <Input
                id={inputName}
                name={name}
                getRef={ref}
                onChange={onChange}
                placeholder="Введите имя"
              />
            </FormItem>
            <Div>
              <Text weight="2">Возраст: {data?.age}</Text>
              {/* <Text weight="2">Возраст: {data?.total}</Text> */}
            </Div>

            <FormItem>
              <Button
                type="submit"
                stretched
                size="m"
                loading={isFetching}
                onClick={handleSubmit(() => setQuery(getValues(inputName)))}
              >
                Отправить
              </Button>
            </FormItem>
          </form>
        </FormLayoutGroup>
      </Group>
    </Panel>
  );
};
