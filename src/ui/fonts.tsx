import { css } from 'styled-components'

const PoppinsFont = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
      family: `${PoppinsFont}`,
      regular: {
        fontWeight: 400
      },
      medium: {
        fontWeight: 500
      },
      semibold: {
        fontWeight: 600
      },
      bold: {
        fontWeight: 700
      }
}