import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { RecordsReponse } from "./types";
import { formatDate } from "./helpers";
import Pagination from "./Pagination";
import Filters from "../../components/Filters";

const BASE_URL = "https://bessadev.com.br/back";

const Records = () => {
  const [recordsResponse, setRecordsResponse] = useState<RecordsReponse>();
  const [acetivePage, setActivePage] = useState(0);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/records?size=12&page=${acetivePage}`)
      .then((response) => setRecordsResponse(response.data));
  }, [acetivePage]);

  const handlePageChange = (index: number) => {
    setActivePage(index);
  };

  return (
    <div className="page-container">
      <Filters link="/charts" linkText="VER GRAFICO" />
      <table className="records-table" cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th>INSTANTE</th>
            <th>NOME</th>
            <th>IDADE</th>
            <th>PLATAFORMA</th>
            <th>GÊNERO</th>
            <th>TITULO DO GAME</th>
          </tr>
        </thead>
        <tbody>
          {recordsResponse?.content.map((record) => (
            <tr key={record.id}>
              <td>{formatDate(record.moment)}</td>
              <td>{record.name} </td>
              <td>{record.age}</td>
              <td className="text-secondary">{record.gamePlatform}</td>
              <td>{record.genreName}</td>
              <td className="text-primary">{record.gameTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        activePage={acetivePage}
        goToPage={handlePageChange}
        totalPages={recordsResponse?.totalPages}
      />
    </div>
  );
};

export default Records;
