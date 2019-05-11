import { Moment } from 'moment';
import { IAlbum } from 'app/shared/model/album.model';

export interface IPhoto {
  id?: number;
  imageContentType?: string;
  image?: any;
  title?: string;
  description?: any;
  height?: number;
  width?: number;
  taken?: Moment;
  uploaded?: Moment;
  album?: IAlbum;
}

export const defaultValue: Readonly<IPhoto> = {};
