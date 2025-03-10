import * as React from 'react';
import { forwardRef } from 'react';

/**
 * LamborghiniIcon icon component
 */
const LamborghiniIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 512 512" ref={ref} {...props}><path fill="#080808" d="M256.385 404.001c-3.739 0-6.887-1.26-12.031-4.815-38.898-28.647-67.284-60.968-86.832-98.845-10.588-20.516-18.678-43.073-24.045-67.045-5.624-25.106-8.475-52.706-8.475-82.037 0-6.613.904-11.297 2.845-14.74 1.925-3.41 4.994-5.955 9.952-8.25 14.71-6.21 31.997-11.11 51.444-14.595C210.28 109.908 232.87 108 256.385 108c23.512 0 46.1 1.91 67.138 5.675 19.447 3.484 36.735 8.385 51.381 14.567 5.022 2.324 8.09 4.868 10.015 8.278 1.94 3.444 2.844 8.127 2.844 14.74 0 29.332-2.851 56.933-8.474 82.037-5.367 23.972-13.457 46.53-24.045 67.045-19.547 37.875-47.933 70.196-86.78 98.81-5.196 3.59-8.345 4.85-12.08 4.85z" /><path fill="#CCB681" d="M341.565 264.185c-.235.135-1.692.833-2.098.99-2.972 1.325-5.638 1.105-8.613-.642-2.136-1.259-4.118-4.021-4.895-4.992-.612-.765-1.351-1.77-2.415-2.718-1.975-1.777-4.648-2.945-9.27-2.863a2.2 2.2 0 0 1-1.068-.25c-4.674-2.472-12.72-5.485-20.41-5.096-1.527.104-1.744-1.005-2.248-2.248-1.4-3.737-2.419-5.47-3.367-6.82-1.21-1.726-1.74-1.74-2.74-2.02-1.117-.314-2.326-.433-3.069-1.725-.09-.16-.455-.844-.041-1.326 1.023-1.19 3.853-2.83-.4-5.23-2.594-1.467-1.44-2.408-1.007-2.628.597-.31 1.624-.553 2.855-.306 1.232.246 2.666.978 4.066 2.62 1.389 1.628 6.074 9.21 8.92 14.971.036.078.1.493.622.541.796.079 2.155.079 2.435.105.436.037.444-.317.399-.46-4.036-13.39-8.676-30.06-16.733-41.656-.16-.332-.022-.683.486-.63 7.209.738 9.3 10.998 13.525 17.736 5.429 8.665 8.61 5.268 9.125-.575.358-4.084-.717-9.284-3.562-12.2-.68-.822-1.878-1.867-2.378-2.483-.18-.22-.205-.593.273-.713.197-.049.477-.07.862-.056 3.334.258 7.96 2.953 9.905 5.955 3.99 6.16 3.696 9.475 3.147 11.655-.934 3.737-2.68 5.884-.516 11.79 4.283 11.693 3.163 9.251.725 16.606-.21.56.134.974.616.933 5.607-.515 7.32.754 8.53 1.404.127.063.232.164.318.146.213-.075.291-.348.328-.713.46-3.155-.197-4.488-.918-6.347-.422-1.09-.9-2.322-1.049-3.52-.247-1.539.033-2.405.496-3.558.788-1.964 1.259-3.484.62-6.437-1.419-6.235-6.53-16.501-9.792-22.415-.27-.511-2.505-4.734-2.857-5.35-.242-.422-.138-.937.038-1.336.15-.332.396-.997.396-.997.78-1.986 1.19-3.506 1.426-5.238.758-5.592-.71-9.568-4.753-12.899-3.752-3.087-10.438-4.453-19.338-3.953l-1.886.108c-8.385.478-17.886 1.02-25.036.43-6.921-.572-10.964-1.67-12.36-3.35-.452-.545-.628-1.15-.55-1.9.154-1.504 1.064-3.001 2.498-4.106 1.24-.956 2.707-1.471 3.745-1.307 1.863.075 3.905 1.124 6.268 2.337 2.12 1.09 4.521 2.322 7.314 3.125 2.36.68 4.7.978 6.944.892a18.3 18.3 0 0 0 6.167-1.318c.833-.336 1.434-.72 1.695-.948.134-.12.183-.35.022-.571-.097-.13-.22-.13-.653-.13-2.972 0-5.619-.471-7.302-.863-1.856-.47-2.016-.922-2.001-1.094.04-.4 1.022-.776 2.139-.829 5.488-.246 9.688.053 12.465.246.949.068 1.695.124 2.237.131.552.011 1.28-.007 1.31-.01.164-.02.213-.124.228-.17a.3.3 0 0 0-.079-.279c-1.934-1.598-8.217-4.006-15.385-5.275-11.528-2.042-19.252-.366-23.703 1.4-.884.35-3.166 1.34-5.193 2.912-2.232 1.728-3.48 3.617-3.707 5.607-.299 2.662 1.631 6.1 12.544 7.366 11.559 1.34 22.352 1.15 31.875.982q1.495-.027 2.927-.049c6.033-.09 11.14 1.363 13.332 3.805 2.52 2.815 2.67 6.578 2.035 8.949-.187.683-.56 1.71-1.008 2.363-.695.937-1.453 1.22-2.849.855-4.461-1.18-12.413-3.8-16.27-5.1-3.435-1.161-6.145-2.076-8.445-2.64-6.828-1.676-8.96-.567-13.544 2.33-1.105.698-2.229 1.464-3.528 2.352-1.882 1.28-4.017 2.733-6.855 4.502-1.71 1.068-3.953 2.304-6.328 3.61-2.415 1.33-4.909 2.704-7.358 4.167-7.844 4.607-9.094 10.782-10.543 17.931-1.03 5.074-2.195 10.823-6.07 16.643-.426.639-3.782 4.716-4.499 5.87-2.654 4.267-4.077 7.948-3.517 14.137.422 4.63-1.16 8.658-2.692 12.556-1.205 3.065-2.344 5.962-2.53 9.06-.143 1.92-.075 3.711-.008 5.444.112 2.878.157 5.742-.724 8.224-.673 1.908-2.382 3.782-3.043 5.626-.855 2.371-1.449 5.746-1.449 8.845-.056 2.61-1.993 4.528-4.047 6.56-1.806 1.787-3.7 3.67-4.39 6.103-.093.325-.153.571-.273.766-.179.287-.444.47-.802.724-.698.493-1.535 1.142-2.453 2.987-.773 1.556-.549 4.33.157 5.678.108.209.414.698.885.754.317.037.634-.134.952-.5 0 0 2.004-2.319 2.785-3.017a.63.63 0 0 1 .787-.052c.22.164.27.44.135.74-.082.17-1.288 2.325-1.994 4.136l-.019.044c-.093.258-.212.58-.04.844.164.258.556.4 1.235.445q.447.016.866.018c3.715 0 5.667-.99 6.672-1.855.392-.422.47-.601.597-.904.034-.078.075-.164.123-.276.747-1.994 1.243-4.297 1.303-6.014 0-.732.206-.937.706-1.438 1.956-1.971 1.956-4.577 1.96-7.097 0-2.318.004-4.715 1.527-6.604 4.151-4.648 6.313-10.08 8.4-15.333 2.154-5.42 4.379-11.024 8.8-15.699 1.112-1.142 2.202-1.77 2.923-1.654q.527.084.832.676c.944 1.747.66 4.103.385 6.377-.31 2.572-.605 5.002.758 6.593.91 1.18 1.157 2.423.709 3.599-.583 1.863-2.356 7.522-6.578 10.027-.101.06-1.214.855-1.565 1.192-.183.175-.313.414-.466.686-.37.661-.833 1.483-2.281 1.912-1.59.4-3.088 1.366-3.905 2.52-2.233 3.155-2.136 7.063-1.927 8.183.082.433.228 1.005.642 1.572.254.347.549.553.851.597.25.038.5-.037.736-.216.246-.187.537-.523.903-.948.579-.669 1.296-1.501 2.2-2.166.29-.213.574-.16.746-.044.16.111.232.287.187.451-.086.295-.355.717-.699 1.258-.432.684-.974 1.531-1.4 2.535-.104.224-.119.43-.037.612.12.284.426.404.515.434 2.688.855 6.705-.161 8.953-2.274 1.127-1.06 1.676-2.464 1.676-4.293 0-.463.22-1.184.702-1.662 1.583-1.355 2.236-3.472 2.93-5.712.165-.534.337-1.082.52-1.627.72-2.11 1.665-3.924 3.946-5.921 2.96-2.767 4.3-5.38 5.144-6.99.86-1.728 1.05-2.695 1.677-3.707 1.235-1.948 5.406-2.314 6.947-1.407.639.377.784.9.422 1.553-.231.426-2.434 3.987-3.468 6.418-.508 1.194-1.658 1.642-2.34 2.042-4.134 2.415-4.888 6.966-5.007 8.83-.038.582.026 1.354.32 1.788.169.25.408.414.669.455.258.041.523-.034.765-.22.24-.183 2.476-2.438 2.744-2.677.37-.321.695-.269.863-.123.175.156.246.462.019.802-.314.463-1.856 2.79-1.677 3.3.306.86 1.188.844 2.068.852 7.086-.601 9.595-5.649 9.595-5.649.168-.291.385-.68.269-1.728-.202-1.893-.65-8.453 3.143-12.537 1.128-1.25 1.789-.407 2.046.153.46 1.004 1.14 2.744 1.523 3.614.822 1.852 1.382 3.218 2.327 5.048 1.59 3.09 3.983 3.516 6.947 3.147 3.83-.482 6.47-.176 9.042.078 2.188.183 3.398.329 5.003-1.139.874-.798 2.554-2.266 3.681-3.86.717-1.012.937-1.65.758-3.218-.53-7.885 3.569-14.735 10.957-18.32 1.109-.447 2.341-.31 3.095.702 1.658 2.457 5.514 8.755 5.514 14.098 0 .504-.197 1.06-.429 1.702-.523 1.463-1.172 3.282.037 5.76.075 2.143-.72 3.82-1.422 5.298-.997 2.106-1.788 3.77.944 5.406.773.463 1.774.877 3.062 1.27q.113.033.224.033a.52.52 0 0 0 .295-.082.35.35 0 0 0 .164-.25c.079-.62.15-2.763.265-3.27.049-.202.15-.445.385-.46.216-.011.433.164.492.336.217.515.773 2.613.926 2.946.131.287.288.481.497.545 1.097.317 2.59-1.568 3.15-2.539.968-1.997.572-4.965-1.004-7.552-.231-.497-.265-.699-.265-1.15.583-2.352.157-3.547-.29-4.809-.258-.728-.52-1.482-.64-2.516-.421-3.707 1.845-15.445 2.062-16.65.384-2.185.705-3.742.843-5.343.135-1.553-.504-3.372-1.583-4.525-.989-1.057-2.18-2.024-3.333-2.96-1.016-.826-1.979-1.606-2.763-2.412-1.27-1.3-1.676-3.2-1.665-3.738.004-.145.033-.235.082-.283.041-.034.104-.049.198-.041 1.75.123 3.15 1.284 4.924 2.751 1.587 1.314 3.386 2.808 5.906 3.924 4.98 2.206 9.707 1.882 14.452-.997 2.02-1.433 2.643-2.662 2.744-2.83.127-.216-.06-.836-.638-.504m-110.328-19.693c.291-2.296 1.986-4.745 2.729-7.612 1.06-3.237 1.352-8.897 1.93-13.38.288-2.237 1.139-3.181 2.755-3.383 1.064-.093 2.177.832 2.752 3.99 1.982 12.933 5.869 14.725 8.124 18.149q.06.094.115.194c.579 1.071.762 2.072-.145 2.8-.53.422-2.3 1.06-5.305-.754-3.61-2.177-4.156-4.521-10.14.269 0 0-.8.62-1.568.79-.65.147-1.366-.107-1.247-1.063m31.326 47.443c-.212.135-.455.045-.806-.179-2.378-1.52-8.964-2.718-14.526-.493-5.72 2.296-10.962 5.533-11.312-.127-.068-5.013 1-7.198-.743-10.18 0 0-.075-.101-.153-.225-.15-.238.033-.29.09-.294 8.037-.628 10.18-3.14 10.68-4.017.112-.195-.033-.4-.239-.422-1.844-.206-11.047-.482-14.75.052-6.507.94-10.883 10.744-11.727 11.674-.978 1.072-2.21.25-2.21-.724 0-1.635.967-9.58 1.61-12.331 1.015-4.357 2.415-7.598 6.663-8.251 2.98-.46 10.293-1.232 9.79-3.21-.419-1.636-.628-2.917-.632-3.64-.003-.968.49-1.162 1.471-.942.72.157 1.691.59 2.935.881 9.199 2.166 13.91.44 19.39-1.993.157-.071 2.196-.99 2.32-1.057.988-.548 2.228.445 1.68 1.62-.292.62-.684.912-1.528 1.722-1.81 1.743-8.564 7.28-4.495 16.64 3.17 7.294 4.092 9.183 6.343 14.163.366.803.417 1.169.149 1.333m17.099 12.63c-.448.695-1.138 1.191-2.483 1.191-1.65 0-2.822-.496-3.52-1.243-1.441-1.53-1.62-3.633-1.266-5.007.22-.87.743-1.444 1.307-1.609.246-.082.377-.063.5.097.247.4 1.143 1.815 1.348 2.106.239.344.676.65 1.034.792.672.268 1.527.5 1.983.705 1.385.601 1.706 2.023 1.097 2.968m26.522-25.805c-.176.284-.333.329-.564.433-8.333 3.155-14.956 11.66-13.754 21.882.023.533-.145 1.28-.645 1.784 0 0-1.751 1.773-2.853 2.531-.373.258-.799.47-1.78.407l-3.712-.235c-.582-.097-.332-.605-.29-.713.04-.108.082-.232.115-.374.314-1.534.09-3.68-2.064-4.487-.31-.172-.116-.455-.079-.549.922-2.28 2.08-5.1 3.01-9.053.563-2.39.216-3.83-.62-5.552a5 5 0 0 0-.706-1.052l-1.31-1.736c-.366-.426-.27-.874.257-1.06l1.848-.471c.448-.16.407-.844-.026-.956l-.956-.302c-.903-.374-1.452-1.094-1.855-1.65a5 5 0 0 1-.295-.474 4.1 4.1 0 0 1-.433-1.173l-.112-.537c-.012-.277-.445-.28-.631-.09-1.46 1.463-1.912 3.711-.84 5.496 1.5 2.5 1.437 2.254 2.774 4.147.444.627.705 1.135.85 1.751.202.855.146 3.017-.425 4.562l-1.516 4.604c-.918 2.06-1.937 1.564-2.516 1.18-.746-.497-1.445-1.785-1.822-3.148 0 0-1.041-3.845-1.004-8.956-.07-.616-.493-1.624-1.833-.743l-3.565 2.96c-.504.27-1.378.12-1.202-1.038 0 0 2.564-11.435 5.323-17.878 2.076-5.253-.231-8.214-2.983-11.47-4.495-5.73-5.499-13.443 4.962-9.22 2.811 1.284 3.816-.378 7.28-.68 2.486-.217 3.304.791 3.513 1.217.19.38.258.803.28 1.023.008.093-.022.157-.127.157-5.869.336-12.865 5.208-7.459 12.854 5.305 7.493 19.914 10.009 26.44 2.867.085-.097.108-.31-.023-.418a.3.3 0 0 0-.161-.073.3.3 0 0 0-.175.02c-1.426.542-2.74.949-4.058 1.165-3.118.515-9.718.138-12.84-3.423-1.787-2.035-1.739-4.39 1.281-4.749 1.68-.134 2.502.175 3.23.19 1.885-.026 2.27-1.911 1.881-2.762-.32-.814-1.071-1.803-2.128-2.658-.974-.695-.448-1.42.187-1.4 6.044.343 11.82 1.388 13.996 8.642.086.273.232 1.187.463 1.53.467.695 1.28 1.214 2.177 1.998 2.195 1.912 4.162 5.32-2.505 15.68m7.847-4.484c1.06-2.22 2.502-.731 3.189 1.703.873 3.095 1 8.075.63 10.64-.478 3.353-2.053 2.68-2.897 1.49-1.329-1.882-2.77-4.387-3.77-6.104-.034-.053-.06-.105-.09-.16-.463-.968-.534-1.733-.045-2.45.5-.773 2.498-4.1 2.983-5.119m-57.646-164.278c23.4 0 45.871 1.9 66.786 5.645 19.297 3.457 36.44 8.314 50.956 14.44 4.554 2.11 7.347 4.402 9.05 7.419 1.765 3.132 2.587 7.504 2.587 13.757 0 29.176-2.834 56.631-8.427 81.6-5.33 23.807-13.365 46.207-23.87 66.565-19.403 37.595-47.597 69.69-86.188 98.116-4.768 3.293-7.624 4.462-10.894 4.462-3.274 0-6.13-1.17-10.894-4.462-38.595-28.425-66.79-60.52-86.192-98.116-10.505-20.358-18.54-42.758-23.87-66.565-5.593-24.969-8.427-52.424-8.427-81.6 0-6.253.821-10.625 2.587-13.757 1.703-3.017 4.495-5.309 9.05-7.418 14.515-6.127 31.659-10.984 50.956-14.44 20.915-3.745 43.385-5.646 66.79-5.646m0-3.998c-49.27 0-90.926 8.411-119.366 20.425C126.606 131.234 123 137.64 123 151.26c0 120.96 47.264 195.863 120.165 249.537 5.208 3.602 8.81 5.204 13.22 5.204 4.405 0 8.008-1.602 13.216-5.204 72.897-53.674 120.165-128.576 120.165-249.537 0-13.619-3.607-20.025-14.019-24.834C347.307 114.411 305.65 106 256.385 106M145.47 137.666v28.624q4.131-1.344 8.31-2.531l-.22 4.513a541 541 0 0 0-12.824 3.961v-33.08zm17.67 15.852 3.468-15.796 3.577 14.034zm8.034 2.259 1.926 7.54 4.902-1.1-8.258-30.879-5.943 1.486-8.201 34.952 4.733-1.322 1.819-8.422zm13.817 5.062V138.27c0-.881 0-1.979-.056-2.972.22 1.102.44 1.983.66 2.752l6.609 22.019.228-.041 6.76-24.29c.277-.989.55-2.146.77-3.083-.052.993-.108 2.147-.108 3.084V158.2l4.401-.661v-32.697l-6 .881-5.005 18.327c-.22.825-.496 1.927-.773 3.084-.164-1.102-.384-2.09-.604-2.808l-4.955-16.676-6.22 1.21v32.804zm36.165-5.283c5.283-.604 8.254-2.92 8.254-7.926v-4.293c0-2.92-1.21-4.626-3.797-5.122 2.255-.933 3.249-2.64 3.249-5.118v-3.357c0-4.954-3.028-7.541-9.192-6.824l-9.415 1.101v32.749zm-6.003-27.742 4.625-.497c3.136-.328 4.13.717 4.13 2.976v2.972c0 2.31-.994 3.52-4.13 3.796l-4.625.44zm0 13.54 5.23-.496c3.084-.276 4.073.66 4.073 3.084v3.688c0 2.255-1.101 3.413-3.96 3.685l-5.343.497zm28.567 13.377c6.168 0 10.405-3.965 10.405-10.733V131.17c0-6.824-4.13-10.4-9.964-10.4-6.056 0-10.293 4.236-10.293 11.061v12.824c0 6.608 3.965 10.076 9.852 10.076m-4.95-10.184v-13.321c0-3.797 2.31-6 5.283-6 3.027 0 5.174 1.871 5.174 5.672v13.316c0 3.965-2.147 6.056-5.339 6.056-2.975 0-5.118-1.759-5.118-5.723m25.428 9.412v-14.643l3.304.112 5.61 14.863 5.287.272-6.055-15.687c3.136-.713 5.062-2.86 5.062-6.769v-2.916c0-5.01-2.751-7.54-8.362-7.817-2.367-.108-6.66-.164-9.745-.164v32.692zm0-28.4 4.622.164c2.534.109 3.636 1.266 3.636 3.468v2.916c0 2.203-1.102 3.304-3.8 3.192l-4.458-.164zm28.567 30.602c6.056 0 9.248-3.688 9.248-9.524v-8.75l-9.576-1.102v4.237l4.678.497v5.01c0 3.633-1.927 5.175-4.734 5.175-3.469 0-6-2.26-6-6.388V132.27c0-3.576 2.035-5.559 4.842-5.559 3.745 0 5.835 2.864 5.892 6.332l4.898.605c-.165-6.552-4.294-11.45-11.23-11.45-5.119 0-9.248 3.36-9.248 9.964v12.712c0 7.598 5.23 11.287 11.23 11.287m19.208 1.869v-14.64l9.027 1.486v14.642l4.846.881V127.65l-4.846-.825v13.925l-9.027-1.486v-13.925l-4.842-.773v32.804zm19.929-29.172 2.419.497 2.423.496v32.805l-4.842-1.101zm14.858 36.109v-20.97c0-1.27-.052-2.587-.052-4.073.329 1.594.661 2.64 1.045 3.74l8.531 23.834 5.066 1.43v-32.692l-4.02-1.157v23.613a34 34 0 0 0-.99-3.632l-7.873-22.404-5.78-1.374v32.698l4.073.989zm20.478 5.78v-32.806l2.393.743 2.397.743v32.805z" /></svg>
  );
});

LamborghiniIcon.displayName = 'LamborghiniIcon';

export default LamborghiniIcon;