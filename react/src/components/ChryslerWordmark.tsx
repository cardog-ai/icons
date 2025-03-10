import * as React from 'react';
import { forwardRef } from 'react';

/**
 * ChryslerWordmark icon component
 */
const ChryslerWordmark = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><path fill="#000" d="M482.435 259.356a97 97 0 0 1-19.856 2.641c-.195 0-104.364 3.717-107.494 4.01-4.988.098-9.879 1.663-13.987 4.401-7.433 4.695-15.65 8.119-24.257 10.271-10.661 2.347-21.421 3.814-32.278 4.206-.782 0 3.815-.392 3.815-.392q5.722-.44 11.444-1.467c9.977-1.369 19.66-4.108 28.854-8.216l.88-.489c4.598 0 4.304-1.272 4.304-1.272l-5.575.196c-4.108.098-8.412.196-9.488.196-.195-.685-9.683-1.272-9.683-1.272h24.355c1.565-.978 3.423-2.054 5.184-3.228 4.988 0 4.695-1.369 4.695-1.369-5.38.098-15.357.293-17.117.196-.196-.685-10.857-1.37-10.857-1.37h27.485c4.597-1.76 9.487-2.641 14.378-2.543l105.44-2.152a128 128 0 0 0 19.367-2.347l1.76-.391c0-.392-1.173-.489-3.325-.489l-30.322-.392c-46.362-.391-132.533-1.173-136.446-1.173h-.978c-4.499-.196-9.096.391-13.302 1.858l-1.761.489a57.6 57.6 0 0 1-15.063 3.228c-5.379.195-25.92.195-26.702.195-.783 0-21.421 0-26.703-.195a65.6 65.6 0 0 1-15.062-3.228l-1.761-.489c-4.304-1.467-8.803-2.054-13.4-1.858h-.88c-3.913 0-90.182.391-136.447.782l-30.419.391c-2.054 0-3.326.196-3.228.489l1.76.392c6.359 1.271 12.814 2.151 19.367 2.347 12.422.196 103.191 2.543 105.343 2.543 4.89-.098 9.781.783 14.378 2.543h28.463s-11.444.685-11.639 1.37h-.685c-2.837 0-11.542 0-16.432-.196 0 0-.392 1.369 4.597 1.369 1.76 1.174 3.619 2.25 5.282 3.228h24.452s-9.585.587-9.781 1.272c-1.174 0-5.282-.098-9.292-.196l-5.575-.196s-.294 1.174 4.304 1.272l.782.489c9.194 4.108 18.878 6.847 28.854 8.216 3.815.685 7.63 1.272 11.444 1.467 0 0 4.597.392 3.815.392-10.857-.392-21.714-1.859-32.278-4.206-8.607-2.054-16.725-5.576-24.257-10.271-4.206-2.738-8.999-4.303-13.987-4.401-3.228-.196-107.298-4.304-107.494-4.304-6.651-.195-13.302-1.173-19.856-2.641l-1.467-.489c0 .294.685 1.076 1.37 1.565 3.227 2.837 15.356 8.803 22.496 10.466 12.324 2.934 88.225 12.618 101.723 14.183l7.434.88c20.345 2.152 45.971 4.988 59.078 6.358 2.445.489 5.086.293 7.433-.391a76.5 76.5 0 0 1 28.463-4.891c9.684-.098 19.367 1.565 28.561 4.891 2.348.684 4.891.88 7.336.391 13.009-1.272 38.733-4.108 58.98-6.358l7.532-.88c13.497-1.467 89.301-10.759 101.625-13.792 7.14-1.76 19.269-7.629 22.497-10.465.586-.587 1.369-1.272 1.369-1.565zm-221.444 18.388h-9.977c-15.063 0-30.028-.195-34.331-1.271-10.368-2.543-15.161-7.336-16.041-8.705-.783-1.468-.587-1.37.684-1.37h109.353c1.272 0 1.369.098.685 1.37-.685 1.271-5.576 6.162-15.944 8.705-4.401 1.076-19.366 1.271-34.429 1.271" /><path fill="#000" d="m252.971 270.898-2.445-1.467h-2.934l3.619 2.347v1.859h2.445v-1.859l3.326-2.347h-1.663zM270.672 269.431h-2.543v4.206h8.216v-.783h-5.673zM280.946 271.974h5.673v-.783h-5.673v-.978h5.869v-.782h-8.314v4.206h8.314v-.783h-5.869zM232.917 271.093h-5.282v-1.662h-2.543v4.206h2.543v-1.761h5.282v1.761h2.543v-4.206h-2.543zM247.103 270.604c0-.586-.88-1.173-3.717-1.173h-5.771v4.206h2.641v-3.424c2.25-.098 4.304.098 4.304.587 0 .391-.391.685-2.935.587.587.489 3.228 2.347 3.228 2.347h2.837l-3.228-1.858c1.565-.196 2.641-.685 2.641-1.272M292.878 271.387c.587.489 3.228 2.347 3.228 2.347h2.837l-3.228-1.858c1.663-.098 2.738-.587 2.738-1.174s-.88-1.174-3.716-1.174h-5.771v4.206h2.641v-3.521c2.249-.098 4.303.098 4.303.587 0 .391-.489.685-3.032.587M263.829 270.996l-2.152-.196c-.782 0-1.369-.195-1.369-.489 0-.293.391-.391 1.956-.391 1.076 0 2.054.098 3.13.293l.196-.782a26 26 0 0 0-3.913-.294c-1.467 0-3.814.196-3.814 1.272s.782 1.174 2.543 1.369l1.858.196c.88 0 1.467.196 1.467.391 0 .294-.098.489-2.152.489-1.173 0-2.445-.098-3.619-.293l-.293.88c1.272.196 2.641.294 3.912.294 2.446 0 4.793-.392 4.793-1.468-.098-.586-.88-1.075-2.543-1.271M219.717 270.018c1.565 0 3.13.195 3.423.195l-.293-.88c-.392 0-1.859-.196-3.717-.196-3.228 0-6.065.783-6.065 2.348s2.837 2.347 6.065 2.347c1.76 0 3.325-.195 3.717-.195l.293-.881c-.391 0-1.858.196-3.423.196s-4.011-.391-4.011-1.369 2.348-1.565 4.011-1.565M241.622 238.133v-8.216000000000001l.392-.392s6.26-6.064 9.683-9.292h-2.739l-8.02 7.043-.783.685-.782-.685-4.304-3.717-4.01-3.326h-6.945l10.466 9.488.391.391v8.119h6.651zM336.698 238.133v-2.152h-21.812v-15.748h-6.162v17.9zM349.803 238.035h28.463v-2.152h-22.497v-5.575h21.714v-2.25h-21.714v-5.575h22.105v-2.25h-28.071zM166.113 238.133v-17.9h-6.26v7.923h-17.41v-7.923h-6.358v17.9h6.358v-7.824999999999999h17.41v7.825zM213.456 238.132c-1.956-1.858-6.162-6.064-7.923-7.434l-1.173-.978 1.565-.195c5.379-.587 6.846-2.544 6.846-4.598-.097-1.369-.978-2.64-2.249-3.227-2.935-1.272-6.162-1.859-9.292-1.663h-16.824v17.997h6.26v-15.552h4.989c4.108 0 7.629 0 9.096 1.272.587.391.978 1.076.978 1.76 0 1.174-.782 2.152-1.858 2.543-2.446.489-4.989.881-7.434.881 2.641 2.641 8.607 8.118 9.683 9.292h7.336zM276.15 238.621c3.815.097 7.532-.392 11.151-1.37 3.032-.978 4.695-2.347 4.597-4.206 0-1.369-.685-2.543-1.859-3.227-1.956-1.076-4.108-1.663-6.259-1.859-2.641-.391-5.38-.782-7.336-.978a22 22 0 0 1-3.521-.587c-.881-.196-1.565-.978-1.663-1.858 0-.881.684-1.565 1.858-1.859 1.859-.391 3.717-.489 5.575-.489 3.424 0 6.847.391 10.271.978l.391-2.152c-4.402-.586-8.803-.978-13.302-.978-2.837-.097-5.674.294-8.51.978-2.641.783-4.206 1.957-4.206 3.815a3.54 3.54 0 0 0 1.761 3.326c2.054 1.076 4.206 1.663 6.455 1.858 1.272.196 3.032.489 6.554.88 1.271.098 2.64.392 3.814.685.978.294 1.859.783 1.859 1.859-.098.88-.685 1.565-1.468 1.858a15.45 15.45 0 0 1-6.651.88c-4.01 0-8.02-.391-11.835-1.271l-.587 2.543c4.206.587 8.51.978 12.814.978zM93.83 222.481c-3.326 1.565-5.282 3.717-5.282 6.749 0 2.935 1.858 5.184 5.282 6.749 4.01 1.663 8.411 2.445 12.715 2.348 3.619 0 7.238-.294 10.857-.783l.685-2.543c-3.326.391-6.554.587-9.879.685-2.837 0-5.673-.489-8.314-1.467-2.543-.979-4.597-2.641-4.597-5.087 0-2.543 2.152-4.108 4.597-5.086a24 24 0 0 1 8.314-1.467c3.325 0 6.651.293 9.879.685l-.489-2.446c-3.619-.489-7.238-.782-10.857-.782-4.402-.098-8.803.782-12.911 2.445M423.161 238.228c-1.956-1.956-6.162-6.064-7.922-7.433l-1.174-.978 1.565-.196c5.379-.587 6.847-2.543 6.847-4.695-.098-1.369-.979-2.641-2.25-3.13-2.934-1.271-6.162-1.858-9.292-1.663h-16.824v17.998h6.26v-15.65h4.989c4.108 0 7.629 0 9.096 1.271.587.392.978 1.076.978 1.761a2.52 2.52 0 0 1-1.858 2.445c-2.446.587-4.989.881-7.434.978 2.543 2.641 8.607 8.119 9.683 9.292z" /></svg>
  );
});

ChryslerWordmark.displayName = 'ChryslerWordmark';

export default ChryslerWordmark;