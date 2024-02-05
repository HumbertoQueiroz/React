import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

/* Para setar um valor padrão a uma propriedade pode ser usado a desestruturação das propriedades
usando chaves e p o nome das propriedades
Também é útil quando quer pegar apenas uma ou algumas propriedades e não a totalidade
fazendo a desestruturação somente as propriedades elencadas serão passadas para a função
Obs.: agora chama direto o nome da propriedade e não mais o objeto . propriedade*/

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean;
}

export function Avatar({ hasBorder=true, ...props }:AvatarProps){
  return (
    <img
      className={hasBorder? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
}
