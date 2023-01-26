import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../../App";
import { getMovies } from "../../../Api";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { TheatersRounded } from "@mui/icons-material";
import "./Movies.css";
import { selectOptions, titleMoviesContainer } from "./constants";
import MovieCard from "./MovieCard/MovieCard";
import SearchInput from "../../../lib/elementComponents/SearchInput/SearchInput";
import {
  changeFilteredState,
  changeOrderBy,
  clearFilteredState,
  clearState,
  getAllMovies,
} from "./features/MoviesSlice";
import SelectOptions from "../../../lib/elementComponents/SelectOptions/SelectOptions";
import moment from "moment";

const Movies = () => {
  const dispatch = useDispatch();

  const { moviesData, orderBy, filteredMovies } = useSelector(
    (state) => state.movies
  );

  const db = getFirestore(firebaseApp);

  const moviesCollectionRef = collection(db, "movies");

  const handleChangeSelect = (e) => {
    dispatch(changeOrderBy(e.target.value));
  };

  const sortArray = (arr, organizationType) => {
    let newArray = [...arr];
    switch (organizationType) {
      case "0":
        newArray.sort((a, b) =>
          new Date(a.releaseDate) < new Date(b.releaseDate)
            ? -1
            : new Date(a.releaseDate) > new Date(b.releaseDate)
            ? 1
            : 0
        );
        break;
      case "1":
        newArray.sort((a, b) =>
          a.title < b.title ? -1 : a.title > b.title ? 1 : 0
        );
        break;
      case "2":
        newArray.sort((a, b) =>
          a.country < b.country ? -1 : a.country > b.country ? 1 : 0
        );
        break;

      default:
        console.log("Você informou um tipo de ordenação inválida!");
    }

    return newArray;
  };

  const organizeData = (organizeType, response) => {
    if (response) {
      if (response.length) {
        let unformattedData = response;
        let formattedData = sortArray(unformattedData, organizeType.toString());

        if (unformattedData != formattedData) {
          dispatch(getAllMovies(formattedData));
        }
      }
    }
  };

  const saveData = (response) => {
    organizeData(orderBy, response);
  };

  const getAllWork = () => {
    getMovies(moviesCollectionRef).then((res) => saveData(res));
  };

  const filterValue = (value) => {
    const data = moviesData;
    let newData = [];

    if (data.length) {
      newData = data.filter((item) => item.title.includes(value));
      return newData;
    }
    return [];
  };

  const handleChangeAutoComplete = (event) => {
    if (event.target.value.length) {
      const filteredData = filterValue(event.target.value);
      dispatch(changeFilteredState(filteredData));
    } else {
      if (filteredMovies.length) {
        dispatch(clearFilteredState());
      }
    }
  };

  useEffect(() => {
    dispatch(clearState());
    getAllWork();
  }, []);

  useEffect(() => {
    organizeData(orderBy, moviesData);
  }, [orderBy]);

  return (
    <>
      <div className="content-container">
        <Card className="card-movies-container">
          <CardHeader
            title={
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                display="flex"
                align="left"
                alignItems="center"
                justifyContent="flex-start"
              >
                {
                  <>
                    <TheatersRounded />
                    {titleMoviesContainer}
                  </>
                }
              </Typography>
            }
          />
          <CardContent className={"card-movies-content"}>
            <Card className="table-movies">
              <Card className="toolbar-movies">
                <div className="title-container">
                  <Typography variant="h6" noWrap>
                    Filmes
                  </Typography>
                </div>
                <div className="action-container">
                  <SearchInput
                    className="field-movies"
                    placeholder={"Filtrar filmes"}
                    options={moviesData}
                    size="small"
                    handleChange={(e) => handleChangeAutoComplete(e)}
                  />
                  <SelectOptions
                    className="field-movies orderby"
                    value={orderBy}
                    options={selectOptions}
                    handleChange={(e) => handleChangeSelect(e)}
                    size="small"
                    label="Categoria"
                    formControlClassName="form-control-orderby"
                  />
                </div>
              </Card>
              <div className="movies-container">
                <Grid container spacing={4} margin={"0 !important"}>
                  {!filteredMovies.length
                    ? moviesData.map((item) => {
                        return (
                          <Grid
                            item
                            xs={3}
                            display={"flex"}
                            justifyContent={"center"}
                          >
                            <MovieCard data={item} />
                          </Grid>
                        );
                      })
                    : filteredMovies.map((item) => {
                        return (
                          <Grid
                            item
                            xs={3}
                            display={"flex"}
                            justifyContent={"center"}
                          >
                            <MovieCard data={item} />
                          </Grid>
                        );
                      })}
                </Grid>
              </div>
            </Card>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Movies;
