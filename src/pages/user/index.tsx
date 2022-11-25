import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Title, Container, ContainerTable, Msg, Wrapper, Column, WrapperInput, Form, WrapperChkBox } from "./style";
import { MdPaid, MdPermIdentity, MdDateRange} from "react-icons/md";
import { Balance } from "../../components/Balance";
import { Table } from "../../components/Table";
import { useContext, useMemo, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import { dataHandle } from "../../services/dataHandle";




export const User = () => {
    const { auth } = useContext(AuthContext);
    const [saldo, setSaldo] = useState<number>(0);
    const [data, setData] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(0);
    const [usernameReceiver, setUser] = useState("");
    const [msg, setMsg] = useState("");
    const [sent, setSent] = useState(false);
    const [received, setReceived] = useState(false);
    const [date, setDate] = useState("");

    useEffect(() => {
        (async () => {
            const resBalance = await api.get("/balance");
            const resTransaction = await api.get("/alltransactions");
            setSaldo(parseFloat(resBalance.data.balance));
            setData(dataHandle(resTransaction.data));
            setLoading(false);
        })()
    }, []);

    const columns = useMemo(() => [
                {
                    Header: "Data",
                    accessor: "created_at"
                },
                {
                    Header: "Valor",
                    accessor: "value"
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
    
    const handleSubmitTransaction = async (e: any) => {
        e.preventDefault();
        try {
            await api.post("/transaction", {value, usernameReceiver});
            setMsg("Transação concluída.");
        } catch (error) {
            setMsg("Valor ou usuário inválidos.");
        }       
    };

    const handleInputUser = (e: any) => setUser(e.target.value);

    const handleInputValue = (e: any) => setValue(e.target.value);

    const handleSubmitFiltro = async (e: any) => {
        e.preventDefault();
        try {
            const res = await api.post("/filter", {date, sent, received});
            setData(dataHandle(res.data));
        } catch (error) {
            console.log(error);
        }       
    };
 
    const handleInputDate = (e: any) => setDate(e.target.value);

    const handleChkBoxEnv = () => setSent(!sent);

    const handleChkBoxRcb = () => setReceived(!received);

     
    if(loading) <h3>"Aguarde um momento..."</h3>    

    return (
        <>
            <Header auth={auth} />
            <Wrapper>
                <Container>
                    <Column>
                        <Title>SEU SALDO</Title>
                        <Balance value={saldo}></Balance>
                    </Column>
                    <Column>
                        <WrapperInput>
                            <Title>TRANSAÇÃO</Title>
                            <form onSubmit={handleSubmitTransaction}>
                                <Input type="number" min="0.01" step="0.01" 
                                    placeholder="Valor a transferir" onChange={handleInputValue}
                                    leftIcon={<MdPaid />}/>
                                <Input placeholder="Quem vai receber?" onChange={handleInputUser}
                                    leftIcon={<MdPermIdentity />}/>
                                <Button type="submit" title="Enviar"/>
                            </form>
                                <Msg>{msg}</Msg>
                        </WrapperInput>
                    </Column>
                </Container>
                <ContainerTable>
                    <Title>HISTÓRICO</Title>
                    <Form onSubmit={handleSubmitFiltro}>
                        <Input type="date" leftIcon={<MdDateRange />} placeholder="data"
                            onChange={handleInputDate} />
                        <WrapperChkBox>
                            <input type="checkbox" id="enviados" checked={sent}
                                onChange={handleChkBoxEnv} />
                            <label htmlFor="enviados">Enviados</label>
                        </WrapperChkBox>
                        <WrapperChkBox>
                            <input type="checkbox" id="recebidos" checked={received}
                                onChange={handleChkBoxRcb} />
                            <label htmlFor="recebidos">Recebidos</label>
                        </WrapperChkBox>
                        <Button type="submit" title="Filtrar" />
                    </Form>
                    <Table columns={columns} data={data} />
                </ContainerTable>
            </Wrapper>
        </>
    )
};