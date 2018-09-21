import { helper } from '@ember/component/helper';
import { typeOf } from '@ember/utils';
import { htmlSafe } from '@ember/string';

export function filteredText([str]) {
  if (typeOf(str) === 'string') {
    str = str.replace(/\n/g, '<br>');
  }

  return htmlSafe(str);
}

export default helper(filteredText);
