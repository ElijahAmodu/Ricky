// import store from "../redux/app/store"
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from '../redux/features/Slice-implementation/characterSLice';
import { RootState } from "../redux/app/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Pagination } from "antd"


const Card = () => {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  const { isLoading, error, characters } = useSelector((state: RootState) => state.characterData);
  const [ pageNum, setPageNum]  = useState(1);

  useEffect(() => {
    dispatch(fetchCharacters(pageNum));
  }, [dispatch, pageNum]);

  const handlePageChange = (pageNumber: number) => {
    setPageNum(pageNumber); // Update currentPage when a page number is clicked
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <h3>Name: {character.name}</h3>
          <h3>Location: {character.location.name}</h3>
          <h3>Status: {character.status}</h3>
        </div>
      ))}

<div>
      <Pagination current= {pageNum}defaultCurrent={6} total={420} onChange={handlePageChange}/>
      </div>
    </div>
  );
};

export default Card;

