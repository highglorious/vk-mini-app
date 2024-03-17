import { useQuery } from "@tanstack/react-query";
import { Panel, Button, Group, Div, Textarea } from "@vkontakte/vkui";
import { getCatFact } from "@/shared/api/catfact";
import { useRefCursorAfterWord } from "@/shared/lib";
import { Error } from "@/shared/ui/error";
import { NavHeader } from "@/shared/ui/nav-header";

export const CatFact = ({ nav }: { nav: string }) => {
  const { isFetching, isError, data, refetch } = useQuery({
    queryKey: ["fact"],
    queryFn: getCatFact,
    enabled: false,
  });

  const ref = useRefCursorAfterWord(isFetching);

  if (isError) return <Error />;

  return (
    <Panel nav={nav}>
      <NavHeader>Факт о котах</NavHeader>
      <Group>
        <Div>
          <Button
            stretched
            size="m"
            //loading={isFetching}
            onClick={() => {
              refetch();
            }}
          >
            Получить
          </Button>
        </Div>

        <Div>
          <Textarea
            getRef={ref}
            placeholder="Bla bla bla"
            value={isFetching ? "Загружаю..." : data?.fact}
          />
        </Div>
      </Group>
    </Panel>
  );
};
