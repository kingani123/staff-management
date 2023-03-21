import React  from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Home.css";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
 
  Legend,PieChart, Pie, Sector, Cell
 
} from 'recharts';


const data = [
  {
    name: 'Page A',
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: 'Page B',
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: 'Page C',
    uv: 20,
    pv: 98,
    amt: 22,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  
];
const data1 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};





const Home  = ()=>{
  const usenavigate = useNavigate();

  useEffect(() => {
    
          let username = sessionStorage.getItem('user_name_email');
          if (username === '' || username === null) {
              usenavigate('/login');
          }
      });

    return (

     <div className="body_right">
  <div className="inside">
  <div className="container">
      
   
    <div className="right_body_section">
      {/*--content here--*/}
      <div className="row row-cols-xl-5">
      <div className="col">
        <div className="card bg-danger">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <div>
                       <b> <p className="mb-1 text-dark">Total Employee </p></b>
                       <center> <h4 className="my-1 text-dark">1</h4></center>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card bg-success">
            <div className="card-body">
                
                    <div>
                    <b><p className="text-dark">Direct Employee</p></b>
                        <center><h4 className="my-1 text-dark">0</h4></center>
                        
                    </div>
                   
                
            </div>
        </div>
    </div>
    <div class="col">
        <div className="card radius-10 bg-info">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <div>
                    <b><p className="mb-0 text-dark">Via Contractors</p></b>
                        <center><h4 className="my-1 text-dark">1</h4></center>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card radius-10 bg-warning">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <div>
                    <b><p className="mb-0 text-dark">Daily Wagers</p></b>
                        <center> <h4 class="my-1 text-dark">0</h4></center>
                       
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card radius-10 bg-primary">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <div>
                       <b> <p className="mb-0 text-dark">Casuals</p></b>
                        <center><h4 className="my-1 text-dark">0</h4></center>
                       
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
<div className="row">
<div class="col-xl-6 d-flex">
        <div className="card radius-10 w-100 ">
            <div className="card-header bg-transparent">
                <div className="row g-3 align-items-center">
                    <div className="col">
                        <h3 classNames="mb-0">Staff Strength Graph</h3>
                    </div>
                </div>
            </div>            
            <div className="card-body text-white">                
                
                <ResponsiveContainer width="100%" aspect={1.5}>
              <LineChart
                width={500}
                height={500}
                data={data}
                margin={{
                  top: 1,
                  right: 1,
                  left: 1,
                  bottom: 1,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line  dataKey="pv" stroke="red" activeDot={{ r: 8 }} />
                <Line  dataKey="uv" stroke="green" />
              </LineChart>
            </ResponsiveContainer>
                
        </div>    
        </div>
    </div>
    <div class="col-xl-6 d-flex">
        <div className="card radius-10 w-100 ">
            <div className="card-header bg-transparent">
                <div className="row g-3 align-items-center">
                    <div className="col">
                        <h3 className="mb-0">Direct Vs Others Chart</h3>
                    </div>
                </div>
            </div>
            <div class="card-body text-dark">                
            <ResponsiveContainer width="100%" aspect={1.5}>
        <PieChart width={500} height={500}>
          <Pie
            data={data1}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
          >
            {data1.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
   
     
            </div>
        </div>
    </div>
</div>


    </div>
  </div>
</div>
</div>

      
      );
  
}
export default Home;