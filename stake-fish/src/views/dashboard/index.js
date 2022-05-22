import React from 'react';

import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import { fetcher } from '../../library';

import './styles.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const { data } = useSWR('/exchanges?per_page=10&page=1', fetcher);

  return (
    <div className="flex w-full table-wrapper">
      <table id="exchange-table">
        <thead className="header">
          <tr>
            <th className="w-1/5">#</th>
            <th>Exchange</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody className="results">
          {
            data && data.map((item) => (
              <tr className="cursor-pointer" onClick={() => navigate(`/detail/${item.id}`)}>
                <th className="w-1/5">{`#${item.trust_score_rank}`}</th>
                <td className="flex flex-row items-center gap-4">
                  <img src={item.image} className="rounded-full " alt="logo" />
                  {item.name}
                </td>
                <td>{item.country}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
