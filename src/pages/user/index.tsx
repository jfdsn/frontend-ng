import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Title, Container, ContainerTable, ErrorMsg, Wrapper, Column, WrapperInput, Form, WrapperChkBox } from "./style";
import { MdPaid, MdPermIdentity, MdDateRange} from "react-icons/md";
import { Balance } from "../../components/Balance";
import { Table } from "../../components/Table";
import { useMemo } from "react";

export const User = () => {
    const data = [{date:"10-10-2010", debitedAccountId: 1, creditedAccountId: 2},
        {date:"10-10-2010", debitedAccountId: 1, creditedAccountId: 2},
        {date:"10-10-2010", debitedAccountId: 1, creditedAccountId: 2},
        {date:"10-10-2010", debitedAccountId: 1, creditedAccountId: 2}
    ]

    const columns = useMemo(() => [
                {
                    Header: "Data",
                    accessor: "date"
                },
                {
                    Header: "De",
                    accessor: "debitedAccountId"
                },
                {
                    Header: "Para",
                    accessor: "creditedAccountId"
                }
        ], []);

    return (
        <>
            <Header auth={true} />
            <Wrapper>
                <Container>
                    <Column>
                        <Title>SEU SALDO</Title>
                        <Balance value={100.00}></Balance>
                    </Column>
                    <Column>
                        <WrapperInput>
                            <Title>Transação</Title>
                            <form>
                                <Input placeholder="Valor à transferir" leftIcon={<MdPaid />}></Input>
                                <Input placeholder="Quem vai receber?" leftIcon={<MdPermIdentity />}></Input>
                                <Button type="submit" title="Enviar"></Button>
                            </form>
                                <ErrorMsg>Error aqui!</ErrorMsg>
                        </WrapperInput>
                    </Column>
                </Container>
                <ContainerTable>
                    <Form>
                        <Input leftIcon={<MdDateRange />} placeholder="data" />
                        <WrapperChkBox>
                            <input type="checkbox" name="enviados" />
                            <label>Enviados</label>
                        </WrapperChkBox>
                        <WrapperChkBox>
                            <input type="checkbox" name="recebidos" />
                            <label>Recebidos</label>
                        </WrapperChkBox>
                        <Button type="submit" title="Filtrar" />
                    </Form>
                    <Table columns={columns} data={data} />
                </ContainerTable>
            </Wrapper>
        </>
    )
};