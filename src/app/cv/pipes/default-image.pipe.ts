import { Pipe, PipeTransform } from '@angular/core';
import { CONSTANTES } from 'src/config/constantes';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    /*
      Si chaine vide ou ne contient que des espaces
        retourner path par défaut
      sinon
        retourourner le meme path
    */
    if (path.trim()) {
      return path;
    }
    return CONSTANTES.defaultImage;
  }

}
