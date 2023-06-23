import { createContext, useContext, useState } from "react";
import React from 'react'


export const FavoritesContext = createContext()
 FavoritesContext.displayName="MyFavotites"

 
 
 export default function FavoritesProvider({children}) {
    const[favorite, setfavorite]=useState([])
   return (

    <FavoritesContext.Provider
     value={{favorite, setfavorite}}
    
    >
        {children}

    </FavoritesContext.Provider>
   
   )
 }
 // hook persornalizado//


 
 export function useFavoritesContext(){
    const{favorite, setfavorite} = useContext(FavoritesContext)

    function addFavorite(newFavorite){
    // verificar se tem item repetido

    const reapeatedFavorite = favorite.some((item) => item.id === newFavorite.id)

    // nova lista recebe lista anterior

    let newList=[...favorite]
    // verificar de nao tem repetido e adicionar o item na lista de favoritos
    if(!reapeatedFavorite){
        newList.push(newFavorite)
        return setfavorite(newList)
    }
    // se for repetido ele vai tira da lista 

    newList = favorite.filter((fav) => fav.id !== newFavorite.id)
    return setfavorite(newList)

    }
    return {
        favorite,addFavorite
        
    }
 };
 