import { useState } from "react"
import DisplayGrades from "./components/DisplayGrades"
import React from 'react';

function App() {
  const [gradeState, setGradeState] = useState(
    {
      aspek_penilaian_1: {
        mahasiswa_1: 7,
        mahasiswa_2: 5,
        mahasiswa_3: 3,
        mahasiswa_4: 9,
        mahasiswa_5: 8,
        mahasiswa_6: 1,
        mahasiswa_7: 5,
        mahasiswa_8: 3,
        mahasiswa_9: 9,
        mahasiswa_10: 8,
      },
      aspek_penilaian_2: {
        mahasiswa_1: 4,
        mahasiswa_2: 5,
        mahasiswa_3: 6,
        mahasiswa_4: 6,
        mahasiswa_5: 5,
        mahasiswa_6: 10,
        mahasiswa_7: 5,
        mahasiswa_8: 2,
        mahasiswa_9: 1,
        mahasiswa_10: 2,
      },
      aspek_penilaian_3: {
        mahasiswa_1: 1,
        mahasiswa_2: 2,
        mahasiswa_3: 1,
        mahasiswa_4: 9,
        mahasiswa_5: 7,
        mahasiswa_6: 4,
        mahasiswa_7: 5,
        mahasiswa_8: 6,
        mahasiswa_9: 9,
        mahasiswa_10: 8,
      },
      aspek_penilaian_4: {
        mahasiswa_1: 3,
        mahasiswa_2: 9,
        mahasiswa_3: 10,
        mahasiswa_4: 9,
        mahasiswa_5: 7,
        mahasiswa_6: 7,
        mahasiswa_7: 7,
        mahasiswa_8: 2,
        mahasiswa_9: 3,
        mahasiswa_10: 4,
      }
    }
  )

  const changeGrade = (e) => {
    const newGrade = { ...gradeState, aspek_penilaian_1: { ...gradeState.aspek_penilaian_1, mahasiswa_1: Number(e.target.value) } }
    setGradeState(newGrade)
  }

  return (
    <div className="main">
      <h1>Aplikasi Penilaian Mahasiswa</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Mahasiswa</th>
              <th>Aspek Penilaian 1</th>
              <th>Aspek Penilaian 2</th>
              <th>Aspek Penilaian 3</th>
              <th>Aspek Penilaian 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mahasiswa 1</td>
              <td>
                <select value={gradeState.aspek_penilaian_1.mahasiswa_1} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_1: { ...gradeState.aspek_penilaian_1, mahasiswa_1: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_2.mahasiswa_1} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_2: { ...gradeState.aspek_penilaian_2, mahasiswa_1: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_3.mahasiswa_1} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_3: { ...gradeState.aspek_penilaian_3, mahasiswa_1: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_4.mahasiswa_1} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_4: { ...gradeState.aspek_penilaian_4, mahasiswa_1: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Mahasiswa 2</td>
              <td>
                <select value={gradeState.aspek_penilaian_1.mahasiswa_2} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_1: { ...gradeState.aspek_penilaian_1, mahasiswa_2: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_2.mahasiswa_2} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_2: { ...gradeState.aspek_penilaian_2, mahasiswa_2: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_3.mahasiswa_2} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_3: { ...gradeState.aspek_penilaian_3, mahasiswa_2: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_4.mahasiswa_2} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_4: { ...gradeState.aspek_penilaian_4, mahasiswa_2: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Mahasiswa 3</td>
              <td>
                <select value={gradeState.aspek_penilaian_1.mahasiswa_3} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_1: { ...gradeState.aspek_penilaian_1, mahasiswa_3: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_2.mahasiswa_3} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_2: { ...gradeState.aspek_penilaian_2, mahasiswa_3: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_3.mahasiswa_3} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_3: { ...gradeState.aspek_penilaian_3, mahasiswa_3: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_4.mahasiswa_3} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_4: { ...gradeState.aspek_penilaian_4, mahasiswa_3: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Mahasiswa 4</td>
              <td>
                <select value={gradeState.aspek_penilaian_1.mahasiswa_4} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_1: { ...gradeState.aspek_penilaian_1, mahasiswa_4: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_2.mahasiswa_4} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_2: { ...gradeState.aspek_penilaian_2, mahasiswa_4: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_3.mahasiswa_4} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_3: { ...gradeState.aspek_penilaian_3, mahasiswa_4: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_4.mahasiswa_4} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_4: { ...gradeState.aspek_penilaian_4, mahasiswa_4: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Mahasiswa 5</td>
              <td>
                <select value={gradeState.aspek_penilaian_1.mahasiswa_5} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_1: { ...gradeState.aspek_penilaian_1, mahasiswa_5: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_2.mahasiswa_5} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_2: { ...gradeState.aspek_penilaian_2, mahasiswa_5: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_3.mahasiswa_5} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_3: { ...gradeState.aspek_penilaian_3, mahasiswa_5: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_4.mahasiswa_5} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_4: { ...gradeState.aspek_penilaian_4, mahasiswa_5: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Mahasiswa 6</td>
              <td>
                <select value={gradeState.aspek_penilaian_1.mahasiswa_6} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_1: { ...gradeState.aspek_penilaian_1, mahasiswa_6: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_2.mahasiswa_6} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_2: { ...gradeState.aspek_penilaian_2, mahasiswa_6: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_3.mahasiswa_6} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_3: { ...gradeState.aspek_penilaian_3, mahasiswa_6: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_4.mahasiswa_6} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_4: { ...gradeState.aspek_penilaian_4, mahasiswa_6: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Mahasiswa 7</td>
              <td>
                <select value={gradeState.aspek_penilaian_1.mahasiswa_7} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_1: { ...gradeState.aspek_penilaian_1, mahasiswa_7: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_2.mahasiswa_7} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_2: { ...gradeState.aspek_penilaian_2, mahasiswa_7: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_3.mahasiswa_7} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_3: { ...gradeState.aspek_penilaian_3, mahasiswa_7: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_4.mahasiswa_7} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_4: { ...gradeState.aspek_penilaian_4, mahasiswa_7: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Mahasiswa 8</td>
              <td>
                <select value={gradeState.aspek_penilaian_1.mahasiswa_8} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_1: { ...gradeState.aspek_penilaian_1, mahasiswa_8: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_2.mahasiswa_8} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_2: { ...gradeState.aspek_penilaian_2, mahasiswa_8: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_3.mahasiswa_8} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_3: { ...gradeState.aspek_penilaian_3, mahasiswa_8: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_4.mahasiswa_8} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_4: { ...gradeState.aspek_penilaian_4, mahasiswa_8: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Mahasiswa 9</td>
              <td>
                <select value={gradeState.aspek_penilaian_1.mahasiswa_9} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_1: { ...gradeState.aspek_penilaian_1, mahasiswa_9: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_2.mahasiswa_9} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_2: { ...gradeState.aspek_penilaian_2, mahasiswa_9: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_3.mahasiswa_9} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_3: { ...gradeState.aspek_penilaian_3, mahasiswa_9: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_4.mahasiswa_9} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_4: { ...gradeState.aspek_penilaian_4, mahasiswa_9: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Mahasiswa 10</td>
              <td>
                <select value={gradeState.aspek_penilaian_1.mahasiswa_10} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_1: { ...gradeState.aspek_penilaian_1, mahasiswa_10: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_2.mahasiswa_10} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_2: { ...gradeState.aspek_penilaian_2, mahasiswa_10: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_3.mahasiswa_10} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_3: { ...gradeState.aspek_penilaian_3, mahasiswa_10: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>
                <select value={gradeState.aspek_penilaian_4.mahasiswa_10} onChange={(e) => {
                  const newGrade = { ...gradeState, aspek_penilaian_4: { ...gradeState.aspek_penilaian_4, mahasiswa_10: Number(e.target.value) } }
                  setGradeState(newGrade)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="button">
      <a
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(gradeState)
        )}`}
        download="filename.json"
      >
        {`Download Json`}
      </a>
      </div>
    </div>
  )
}

export default App