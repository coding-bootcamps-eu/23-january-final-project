<template>
  <div class="menu-contain">
    <div class="menu-wrapper">
      <div class="scroll menu-form">
        <p class="warning">TO BE IMPLEMENTED | DEMO ONLY</p>
        <h1>
          Programme
          <br />
        </h1>
        <div class="container-icons">
          <div class="row">
            <div class="column">
              <div
                class="element"
                v-bind:class="{ highlight: isMicrosoftSelected }"
                v-on:click="toggleHighlight('Microsoft')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-microsoft"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"
                  />
                </svg>
              </div>
            </div>
            <div class="column">
              <div
                class="element"
                v-bind:class="{ highlight: isCssSelected }"
                v-on:click="toggleHighlight('CSS')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0,0,256,256"
                  width="40px"
                  height="40px"
                  fill-rule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <g transform="scale(8.53333,8.53333)">
                      <path
                        d="M25.428,3.333c-0.19,-0.212 -0.461,-0.333 -0.745,-0.333h-19.366c-0.284,0 -0.555,0.121 -0.745,0.333c-0.19,0.212 -0.28,0.495 -0.249,0.777l2.202,19.823c0.044,0.403 0.329,0.74 0.719,0.851l7.48,2.137c0.09,0.026 0.183,0.039 0.275,0.039c0.092,0 0.185,-0.013 0.275,-0.039l7.48,-2.137c0.39,-0.111 0.674,-0.448 0.719,-0.851l2.203,-19.823c0.032,-0.282 -0.058,-0.565 -0.248,-0.777zM20.516,13.074l-0.446,7.285l-5.038,1.647l-5.038,-1.647l-0.191,-3.484h2.55l0.064,1.584l2.615,0.887l2.615,-0.887l0.191,-2.85h-5.612l-0.127,-2.534h5.867l0.191,-2.534h-8.801l-0.191,-2.535h11.67z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div class="column">
              <div
                class="element"
                v-bind:class="{ highlight: isWordPressSelected }"
                v-on:click="toggleHighlight('WordPress')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-wordpress"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48 0-.63.478-1.218 1.152-1.218.02 0 .039.002.058.003l.031.003A6.838 6.838 0 0 0 8 1.137 6.855 6.855 0 0 0 2.266 4.23c.16.005.313.009.442.009.717 0 1.828-.087 1.828-.087.37-.022.414.521.044.565 0 0-.371.044-.785.065l2.5 7.434 1.5-4.506-1.07-2.929c-.369-.022-.719-.065-.719-.065-.37-.022-.326-.588.043-.566 0 0 1.134.087 1.808.087.718 0 1.83-.087 1.83-.087.37-.022.413.522.043.566 0 0-.372.043-.785.065l2.48 7.377.684-2.287.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.864 6.864 0 0 0 3.868 6.176L1.73 5.206A6.837 6.837 0 0 0 1.137 8z"
                  />
                  <path
                    d="M6.061 14.583 8.121 8.6l2.109 5.78c.014.033.03.064.049.094a6.854 6.854 0 0 1-4.218.109zm7.96-9.876c.03.219.047.453.047.706 0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M0 8c0-4.411 3.589-8 8-8 4.41 0 8 3.589 8 8s-3.59 8-8 8c-4.411 0-8-3.589-8-8zm.367 0c0 4.209 3.424 7.633 7.633 7.633 4.208 0 7.632-3.424 7.632-7.633C15.632 3.79 12.208.367 8 .367 3.79.367.367 3.79.367 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div
                class="element"
                v-bind:class="{ highlight: isGitSelected }"
                v-on:click="toggleHighlight('Git')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-git"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"
                  />
                </svg>
              </div>
            </div>
            <div class="column">
              <div
                class="element"
                v-bind:class="{ highlight: isJavascriptSelected }"
                v-on:click="toggleHighlight('Javascript')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  fill="white"
                  width="40px"
                  height="40px"
                >
                  <path
                    d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z"
                  />
                </svg>
              </div>
            </div>
            <div class="column">
              <div
                class="element"
                v-bind:class="{ highlight: isIndesignSelected }"
                v-on:click="toggleHighlight('Indesign')"
              >
                <svg
                  width="50px"
                  height="50px"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path
                    d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 18.708984 9.7539062 L 20.404297 9.7539062 L 20.404297 20.123047 L 18.763672 20.123047 L 18.763672 18.941406 L 18.646484 18.941406 C 18.222484 19.761406 17.361266 20.246094 16.322266 20.246094 C 14.428266 20.246094 13.246094 18.757906 13.246094 16.378906 C 13.246094 14.013906 14.435266 12.523438 16.322266 12.523438 C 17.347266 12.523438 18.19675 13.015938 18.59375 13.835938 L 18.708984 13.835938 L 18.708984 9.7539062 z M 9.5957031 10.259766 L 11.359375 10.259766 L 11.359375 20.123047 L 9.5957031 20.123047 L 9.5957031 10.259766 z M 16.849609 13.964844 C 15.694609 13.964844 14.982422 14.880766 14.982422 16.384766 C 14.982422 17.895766 15.687609 18.804688 16.849609 18.804688 C 18.018609 18.804688 18.728516 17.888766 18.728516 16.384766 C 18.728516 14.894766 18.011609 13.964844 16.849609 13.964844 z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div
                class="element"
                v-bind:class="{ highlight: isPhotoshopSelected }"
                v-on:click="toggleHighlight('Photoshop')"
              >
                <svg
                  width="40px"
                  height="40px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 26 26"
                  fill="white"
                >
                  <path
                    d="M 11.546875 9.46875 C 11.632813 9.699219 11.675781 9.984375 11.675781 10.320313 C 11.675781 10.722656 11.628906 11.054688 11.539063 11.3125 C 11.449219 11.5625 11.328125 11.761719 11.179688 11.902344 C 11.027344 12.042969 10.855469 12.144531 10.660156 12.199219 C 10.460938 12.261719 10.246094 12.292969 10.023438 12.292969 C 9.964844 12.292969 9.847656 12.285156 9.675781 12.269531 C 9.5625 12.257813 9.484375 12.246094 9.429688 12.238281 L 9.429688 8.613281 C 9.617188 8.574219 9.851563 8.558594 10.121094 8.558594 C 10.328125 8.558594 10.53125 8.585938 10.722656 8.648438 C 10.90625 8.707031 11.070313 8.800781 11.210938 8.929688 C 11.351563 9.0625 11.464844 9.242188 11.546875 9.46875 Z M 26 4.875 L 26 21.125 C 26 23.816406 23.816406 26 21.125 26 L 4.875 26 C 2.183594 26 0 23.816406 0 21.125 L 0 4.875 C 0 2.183594 2.183594 0 4.875 0 L 21.125 0 C 23.816406 0 26 2.183594 26 4.875 Z M 13.730469 12.175781 C 13.933594 11.671875 14.035156 11.054688 14.035156 10.335938 C 14.035156 9.542969 13.914063 8.886719 13.671875 8.386719 C 13.429688 7.886719 13.109375 7.488281 12.71875 7.210938 C 12.332031 6.933594 11.886719 6.746094 11.398438 6.652344 C 10.46875 6.476563 9.503906 6.484375 8.539063 6.589844 C 8.082031 6.636719 7.652344 6.703125 7.261719 6.789063 C 7.203125 6.804688 7.164063 6.855469 7.164063 6.910156 L 7.164063 18 C 7.164063 18.070313 7.21875 18.125 7.289063 18.125 L 9.304688 18.125 C 9.371094 18.125 9.429688 18.070313 9.429688 18 L 9.429688 14.289063 C 9.453125 14.292969 9.480469 14.296875 9.507813 14.300781 C 9.609375 14.3125 9.714844 14.320313 9.824219 14.324219 C 9.933594 14.328125 10.039063 14.332031 10.136719 14.332031 L 10.34375 14.332031 C 10.8125 14.332031 11.277344 14.261719 11.71875 14.117188 C 12.167969 13.976563 12.566406 13.738281 12.910156 13.417969 C 13.253906 13.097656 13.527344 12.679688 13.730469 12.175781 Z M 19.234375 15.761719 C 19.234375 15.304688 19.160156 14.914063 19.007813 14.601563 C 18.855469 14.289063 18.660156 14.023438 18.429688 13.804688 C 18.195313 13.589844 17.949219 13.410156 17.691406 13.265625 C 17.441406 13.128906 17.203125 12.996094 16.980469 12.867188 C 16.765625 12.746094 16.585938 12.617188 16.453125 12.492188 C 16.335938 12.382813 16.277344 12.25 16.277344 12.082031 C 16.277344 11.835938 16.351563 11.550781 16.933594 11.550781 C 17.199219 11.550781 17.472656 11.589844 17.75 11.664063 C 18.027344 11.742188 18.269531 11.824219 18.46875 11.90625 C 18.503906 11.921875 18.539063 11.921875 18.570313 11.90625 C 18.605469 11.890625 18.628906 11.863281 18.636719 11.828125 L 19.085938 10.355469 C 19.101563 10.300781 19.082031 10.242188 19.03125 10.214844 C 18.777344 10.058594 18.429688 9.925781 18.003906 9.824219 C 17.582031 9.71875 17.125 9.667969 16.648438 9.667969 C 15.828125 9.667969 15.195313 9.882813 14.765625 10.3125 C 14.339844 10.738281 14.121094 11.351563 14.121094 12.128906 C 14.121094 12.582031 14.199219 12.96875 14.351563 13.273438 C 14.5 13.574219 14.695313 13.832031 14.929688 14.046875 C 15.164063 14.253906 15.410156 14.433594 15.664063 14.574219 C 15.914063 14.710938 16.152344 14.847656 16.375 14.980469 C 16.589844 15.105469 16.765625 15.246094 16.898438 15.386719 C 17.023438 15.519531 17.082031 15.679688 17.082031 15.871094 C 17.082031 16.074219 17.019531 16.21875 16.894531 16.304688 C 16.757813 16.402344 16.574219 16.449219 16.359375 16.449219 C 16.050781 16.449219 15.753906 16.402344 15.476563 16.3125 C 15.195313 16.21875 14.941406 16.109375 14.722656 15.988281 C 14.691406 15.96875 14.652344 15.964844 14.617188 15.976563 C 14.582031 15.992188 14.554688 16.019531 14.542969 16.054688 L 14.015625 17.589844 C 13.996094 17.644531 14.019531 17.703125 14.066406 17.734375 C 14.332031 17.914063 14.6875 18.058594 15.121094 18.167969 C 15.550781 18.277344 15.996094 18.332031 16.4375 18.332031 C 17.355469 18.332031 18.058594 18.09375 18.527344 17.625 C 18.996094 17.152344 19.234375 16.527344 19.234375 15.761719 Z"
                  />
                </svg>
              </div>
            </div>
            <div class="column">
              <div
                class="element"
                v-bind:class="{ highlight: isVueSelected }"
                v-on:click="toggleHighlight('Vue')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0,0,256,256"
                  width="40px"
                  height="40px"
                  fill-rule="nonzero"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <g transform="scale(5.33333,5.33333)">
                      <path
                        d="M23.987,17l-5.253,-9h-15.76l21.013,36l21.013,-36h-15.76z"
                        fill="#ffffff"
                      ></path>
                      <path
                        d="M29.24,8l-5.253,9l-5.253,-9h-7.588l12.841,22l12.841,-22z"
                        fill="#455a64"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div class="column">
              <div
                class="element"
                v-bind:class="{ highlight: isRevitSelected }"
                v-on:click="toggleHighlight('Revit')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="32px"
                  height="32px"
                  fill="white"
                >
                  <path
                    d="M 6 3 L 6 4 L 6 27.652344 L 9.3417969 29 L 12.492188 27.912109 C 13.381982 27.654336 14 26.829159 14 25.904297 L 14 20.945312 C 15.530547 23.375346 16.808885 25.516566 17.492188 26.777344 C 17.759286 27.269961 18.15567 27.654989 18.574219 27.855469 C 18.992768 28.055948 19.368796 28.088404 19.636719 28.119141 C 22.062045 28.397808 26.673828 28.748047 26.673828 28.748047 L 28.935547 28.919922 L 27.537109 27.132812 C 27.537109 27.132812 25.859322 24.988877 24.185547 22.679688 C 23.34866 21.525092 22.512525 20.328588 21.900391 19.359375 C 21.594324 18.874769 21.343599 18.443529 21.183594 18.125 C 21.125724 18.009797 21.101738 17.922653 21.074219 17.837891 C 21.10474 17.785464 21.122387 17.740837 21.207031 17.648438 C 21.457224 17.375324 21.859845 16.981782 22.277344 16.466797 C 23.112342 15.436826 24 13.855781 24 11.625 C 24 7.6726437 21.84561 4.7610901 18.292969 3.6699219 C 16.207155 3.0295996 13.628767 3 11 3 L 6 3 z M 8 5 L 11 5 C 13.601233 5 16.072845 5.0784 17.707031 5.5800781 C 20.59439 6.4669099 22 8.3273563 22 11.625 C 22 13.350219 21.387658 14.386752 20.722656 15.207031 C 20.390155 15.617171 20.042776 15.955957 19.730469 16.296875 C 19.418161 16.637793 19 16.96684 19 17.75 C 19 18.330966 19.187349 18.607104 19.396484 19.023438 C 19.60562 19.439771 19.882239 19.908434 20.208984 20.425781 C 20.862475 21.460475 21.71384 22.678033 22.564453 23.851562 C 23.582155 25.255615 23.945671 25.702995 24.597656 26.552734 C 23.063894 26.429347 21.445276 26.312629 19.863281 26.130859 C 19.608204 26.101599 19.484904 26.072551 19.439453 26.050781 C 19.394002 26.029013 19.361901 26.030602 19.25 25.824219 C 18.420105 24.292961 17.1038 21.978786 15.029297 18.775391 C 14.782656 18.394011 14.233748 18 13.595703 18 C 12.720646 18 12 18.726667 12 19.625 L 12 25.904297 C 12 25.949437 11.977747 25.978004 11.935547 25.990234 L 11.912109 25.998047 L 9.3964844 26.865234 L 8 26.302734 L 8 5 z M 14.001953 8 C 12.773848 8 12 9.1261836 12 10.25 L 12 12.75 C 12 13.873816 12.773625 15 14.001953 15 L 15.003906 15 C 16.650593 15 18.006885 13.643153 18.003906 11.996094 L 18.003906 10.996094 C 18.000927 9.3531271 16.647251 8 15.003906 8 L 14.001953 8 z M 14.001953 10 L 15.003906 10 C 15.566562 10 16.002885 10.435013 16.003906 10.998047 L 16.003906 11.998047 C 16.004906 12.562987 15.569219 13 15.003906 13 L 14.001953 13 C 14.126282 13 14 13.006184 14 12.75 L 14 10.25 C 14 9.9938164 14.124059 10 14.001953 10 z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div
                class="element"
                v-bind:class="{ highlight: isFigmaSelected }"
                v-on:click="toggleHighlight('Figma')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30px"
                  height="30px"
                  fill="white"
                >
                  <path
                    d="M8.537 24L8.537 24c-1.933 0-3.5-1.567-3.5-3.5l0 0c0-1.933 1.567-3.5 3.5-3.5h2.5c.552 0 1 .448 1 1v2.5C12.037 22.433 10.47 24 8.537 24zM16.5 8H14c-.552 0-1-.448-1-1V2c0-.552.448-1 1-1h2.5C18.433 1 20 2.567 20 4.5l0 0C20 6.433 18.433 8 16.5 8zM8.5 8H11c.552 0 1-.448 1-1V2c0-.552-.448-1-1-1H8.5C6.567 1 5 2.567 5 4.5l0 0C5 6.433 6.567 8 8.5 8zM8.5 16H11c.552 0 1-.448 1-1v-5c0-.552-.448-1-1-1H8.5C6.567 9 5 10.567 5 12.5l0 0C5 14.433 6.567 16 8.5 16zM16 9A3 3 0 1016 15 3 3 0 1016 9z"
                  />
                </svg>
              </div>
            </div>
            <div class="column">
              <div
                class="element"
                v-bind:class="{ highlight: isReactSelected }"
                v-on:click="toggleHighlight('React')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="40px"
                  height="40px"
                  fill="white"
                >
                  <path
                    d="M 10.679688 4.1816406 C 10.068687 4.1816406 9.502 4.3184219 9 4.6074219 C 7.4311297 5.5132122 6.8339651 7.7205462 7.1503906 10.46875 C 4.6127006 11.568833 3 13.188667 3 15 C 3 16.811333 4.6127006 18.431167 7.1503906 19.53125 C 6.8341285 22.279346 7.4311297 24.486788 9 25.392578 C 9.501 25.681578 10.067687 25.818359 10.679688 25.818359 C 11.982314 25.818359 13.48785 25.164589 15 24.042969 C 16.512282 25.164589 18.01964 25.818359 19.322266 25.818359 C 19.933266 25.818359 20.499953 25.681578 21.001953 25.392578 C 22.570814 24.486793 23.167976 22.279432 22.851562 19.53125 C 25.388297 18.431178 27 16.81094 27 15 C 27 13.188667 25.387299 11.568833 22.849609 10.46875 C 23.165872 7.7206538 22.56887 5.5132122 21 4.6074219 C 20.499 4.3174219 19.932312 4.1816406 19.320312 4.1816406 C 18.017686 4.1816406 16.51215 4.8354109 15 5.9570312 C 13.487763 4.8354109 11.981863 4.1816406 10.679688 4.1816406 z M 10.679688 5.9316406 C 11.461321 5.9316406 12.49496 6.3472486 13.617188 7.1171875 C 12.95737 7.7398717 12.311153 8.4479321 11.689453 9.2363281 C 10.681079 9.3809166 9.7303472 9.5916908 8.8496094 9.8554688 C 8.8448793 9.7943902 8.8336776 9.7303008 8.8300781 9.6699219 C 8.7230781 7.8899219 9.114 6.5630469 9.875 6.1230469 C 10.1 5.9930469 10.362688 5.9316406 10.679688 5.9316406 z M 19.320312 5.9316406 C 19.636312 5.9316406 19.9 5.9930469 20.125 6.1230469 C 20.886 6.5620469 21.276922 7.8899219 21.169922 9.6699219 C 21.166295 9.7303008 21.155145 9.7943902 21.150391 9.8554688 C 20.2691 9.5915252 19.317669 9.3809265 18.308594 9.2363281 C 17.686902 8.4480417 17.042616 7.7397993 16.382812 7.1171875 C 17.504962 6.3473772 18.539083 5.9316406 19.320312 5.9316406 z M 15 8.2285156 C 15.27108 8.4752506 15.540266 8.7360345 15.8125 9.0214844 C 15.542718 9.012422 15.274373 9 15 9 C 14.726286 9 14.458598 9.0124652 14.189453 9.0214844 C 14.461446 8.7363308 14.729174 8.4750167 15 8.2285156 z M 15 10.75 C 15.828688 10.75 16.614128 10.796321 17.359375 10.876953 C 17.813861 11.494697 18.261774 12.147811 18.681641 12.875 C 19.084074 13.572033 19.439938 14.285488 19.753906 15 C 19.439896 15.714942 19.084316 16.429502 18.681641 17.126953 C 18.263078 17.852044 17.816279 18.500949 17.363281 19.117188 C 16.591711 19.201607 15.800219 19.25 15 19.25 C 14.171312 19.25 13.385872 19.203679 12.640625 19.123047 C 12.186139 18.505303 11.738226 17.854142 11.318359 17.126953 C 10.915684 16.429502 10.560194 15.714942 10.246094 15 C 10.559972 14.285488 10.915926 13.572033 11.318359 12.875 C 11.737083 12.149909 12.183612 11.499051 12.636719 10.882812 C 13.408289 10.798393 14.199781 10.75 15 10.75 z M 19.746094 11.291016 C 20.142841 11.386804 20.524253 11.490209 20.882812 11.605469 C 20.801579 11.97252 20.702235 12.346608 20.589844 12.724609 C 20.461164 12.483141 20.336375 12.240903 20.197266 12 C 20.054139 11.752196 19.895244 11.529558 19.746094 11.291016 z M 10.251953 11.292969 C 10.103305 11.530776 9.9454023 11.752991 9.8027344 12 C 9.6636666 12.240944 9.5387971 12.483106 9.4101562 12.724609 C 9.29751 12.345829 9.1965499 11.971295 9.1152344 11.603516 C 9.4803698 11.48815 9.86083 11.385986 10.251953 11.292969 z M 7.46875 12.246094 C 7.6794464 13.135714 7.9717297 14.057918 8.3476562 14.998047 C 7.9725263 15.935943 7.6814729 16.856453 7.4707031 17.744141 C 5.7292327 16.903203 4.75 15.856373 4.75 15 C 4.75 14.121 5.701875 13.119266 7.296875 12.322266 C 7.3513169 12.295031 7.4131225 12.272692 7.46875 12.246094 z M 22.529297 12.255859 C 24.270767 13.096797 25.25 14.143627 25.25 15 C 25.25 15.879 24.298125 16.880734 22.703125 17.677734 C 22.648683 17.704969 22.586877 17.727308 22.53125 17.753906 C 22.32043 16.863764 22.030541 15.940699 21.654297 15 C 22.028977 14.062913 22.318703 13.142804 22.529297 12.255859 z M 15 13 C 13.895 13 13 13.895 13 15 C 13 16.105 13.895 17 15 17 C 16.105 17 17 16.105 17 15 C 17 13.895 16.105 13 15 13 z M 9.4101562 17.275391 C 9.5388794 17.516948 9.6655262 17.759008 9.8046875 18 C 9.9476585 18.247625 10.104915 18.470608 10.253906 18.708984 C 9.857159 18.613196 9.4757466 18.509791 9.1171875 18.394531 C 9.1984813 18.02725 9.2976676 17.653633 9.4101562 17.275391 z M 20.589844 17.277344 C 20.702364 17.655759 20.803517 18.02905 20.884766 18.396484 C 20.51963 18.51185 20.13917 18.614014 19.748047 18.707031 C 19.896695 18.469224 20.054598 18.247009 20.197266 18 C 20.336044 17.759557 20.461449 17.518344 20.589844 17.277344 z M 8.8496094 20.144531 C 9.7309004 20.408475 10.682331 20.619073 11.691406 20.763672 C 12.313288 21.552345 12.957085 22.261935 13.617188 22.884766 C 12.495042 23.654481 11.461272 24.070312 10.679688 24.070312 C 10.363687 24.070312 10.1 24.006953 9.875 23.876953 C 9.114 23.437953 8.7230781 22.112031 8.8300781 20.332031 C 8.8337424 20.271023 8.8447938 20.206253 8.8496094 20.144531 z M 21.150391 20.144531 C 21.155182 20.206253 21.166285 20.271023 21.169922 20.332031 C 21.276922 22.112031 20.886 23.436953 20.125 23.876953 C 19.9 24.006953 19.637312 24.070313 19.320312 24.070312 C 18.538728 24.070312 17.504958 23.654609 16.382812 22.884766 C 17.042964 22.261863 17.688542 21.552454 18.310547 20.763672 C 19.318921 20.619083 20.269653 20.408309 21.150391 20.144531 z M 14.1875 20.978516 C 14.457282 20.987578 14.725627 21 15 21 C 15.274373 21 15.542718 20.987578 15.8125 20.978516 C 15.540266 21.263964 15.27108 21.524765 15 21.771484 C 14.72892 21.524749 14.459734 21.263966 14.1875 20.978516 z"
                  />
                </svg>
              </div>
            </div>
            <div class="column">
              <div
                class="element"
                v-bind:class="{ highlight: isHtmlSelected }"
                v-on:click="toggleHighlight('HTML')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0,0,256,256"
                  width="40px"
                  height="40px"
                  fill-rule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <g transform="scale(8.53333,8.53333)">
                      <path
                        d="M25.428,3.333c-0.19,-0.212 -0.461,-0.333 -0.745,-0.333h-19.366c-0.284,0 -0.555,0.121 -0.745,0.333c-0.19,0.212 -0.28,0.495 -0.249,0.777l2.202,19.823c0.044,0.403 0.329,0.74 0.719,0.851l7.48,2.137c0.09,0.026 0.183,0.039 0.275,0.039c0.092,0 0.185,-0.013 0.275,-0.039l7.48,-2.137c0.39,-0.111 0.674,-0.448 0.719,-0.851l2.203,-19.823c0.032,-0.282 -0.058,-0.565 -0.248,-0.777zM20.629,10.43h-8.93l0.212,2.542h8.503l-0.638,7.51l-4.773,1.518l-0.047,-0.015l-4.72,-1.505l-0.258,-3.06h2.312l0.101,1.189l2.637,0.581l2.591,-0.582l0.275,-3.213h-8.09l-0.626,-7.395h11.659z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="border-around">
          <p class="menu-full-width text-language">
            Software<span class="text-language"> <br />Software-Name </span>
            <label class="menu-full-width" for="">
              <input type="text" v-model="sonstiges" placeholder="Sonstiges" />
            </label>
          </p>
        </div>
        <div class="menu-add-task-wrapper">
          <div class="menu-add-task">
            <button class="menu-add-new" @click="addNewSoftware(sonstiges)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg>
              Weitere Software hinzufügen
            </button>
          </div>
        </div>
        <!--This will only appear when the user click 
  the languages or add a new language to the array, only the this will render on the screen-->
        <div
          class="border-around"
          v-for="sonstigesSoftware in sonstigesPrograms"
          v-bind:key="sonstigesSoftware.name"
        >
          <p class="menu-full-width text-language">
            Software<span class="text-language">
              <svg
                @click="deleteSoftware(sonstigesSoftware.name)"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi-trash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
                />
                <path
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
                />
              </svg>
              <br />Software-Name
            </span>
            <label class="menu-full-width" for="">
              <input
                class="remove-focus"
                type="text"
                v-model="sonstigesSoftware.name"
                style="color: var(--bs-log)"
                readonly="true"
              />
            </label>
          </p>
        </div>

        <form action="">
          <p class="">
            <button @click="$emit('back')" class="menu-back-button">
              ZURÜCK
            </button>
          </p>

          <p class="">
            <button @click="$emit('next')" class="menu-next-button">
              WEITER
            </button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMicrosoftSelected: false,
      isCssSelected: false,
      isWordPressSelected: false,
      isGitSelected: false,
      isJavascriptSelected: false,
      isIndesignSelected: false,
      isPhotoshopSelected: false,
      isVueSelected: false,
      isRevitSelected: false,
      isFigmaSelected: false,
      isReactSelected: false,
      isHtmlSelected: false,
      sonstigesPrograms: [],
    };
  },
  methods: {
    addNewSoftware(software) {
      let existingSoftware = this.sonstigesPrograms.find(
        (soft) => soft.name === software
      );

      if (existingSoftware == null) {
        this.sonstigesPrograms.push({ name: software });
      }
    },

    deleteSoftware(software) {
      this.sonstigesPrograms = this.sonstigesPrograms.filter(
        (softwareEntry) => softwareEntry.name != software
      );
    },

    toggleHighlight(software) {
      switch (software) {
        case "Microsoft":
          this.isMicrosoftSelected = !this.isMicrosoftSelected;
          break;
        case "CSS":
          this.isCssSelected = !this.isCssSelected;
          break;
        case "WordPress":
          this.isWordPressSelected = !this.isWordPressSelected;
          break;
        case "Git":
          this.isGitSelected = !this.isGitSelected;
          break;
        case "Javascript":
          this.isJavascriptSelected = !this.isJavascriptSelected;
          break;
        case "Indesign":
          this.isIndesignSelected = !this.isIndesignSelected;
          break;
        case "Photoshop":
          this.isPhotoshopSelected = !this.isPhotoshopSelected;
          break;
        case "Vue":
          this.isVueSelected = !this.isVueSelected;
          break;
        case "Revit":
          this.isRevitSelected = !this.isRevitSelected;
          break;
        case "Figma":
          this.isFigmaSelected = !this.isFigmaSelected;
          break;
        case "React":
          this.isReactSelected = !this.isReactSelected;
          break;
        case "HTML":
          this.isHtmlSelected = !this.isHtmlSelected;
      }
    },
  },
};
</script>

<style scoped>
* {
  font-family: "roboto";
  box-sizing: border-box;
}

h1 {
  display: flex;
  color: white;
  padding-bottom: 20px;
  align-items: center;
  font-weight: 400;
  font-size: 1.2rem;
}

.sub-text {
  border-bottom: 2px solid var(--bs-succes);
  margin-top: 0.5rem;
}

label {
  color: white;
  font-weight: 400;
}

input:focus,
textarea:focus {
  outline: 2px solid var(--bs-primary);
}

input,
textarea,
button {
  width: 100%;
  border: 1px solid var(--bs-log);
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  margin-top: 3rem;
  gap: 10px;
}

.menu-add-task-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.menu-add-task {
  grid-area: 2 / 3;
}
form input,
label input {
  background: #d9d9d9;
  border: 2px solid var(--bs-log);
  border-radius: 5px;
  padding: 0.5rem; /* Add padding to inputs */
}
::placeholder {
  color: var(--bs-log);
  opacity: 0.8;
}

p {
  color: #fff;
}

button,
input {
  padding: 0.5em;
  font-size: 0.8rem;
}
.text-language {
  font-size: 0.8rem;
}
.container-language-add {
  display: flex;
  justify-content: center;
}

.menu-next-button {
  font-size: 1rem;
  padding: 1rem 1rem;
  background-color: var(--bs-succes);
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s linear;
}
.menu-next-button:hover,
.menu-next-button:focus {
  background: var(--bs-primary);
  outline: 0;
}
.menu-back-button {
  font-size: 1rem;
  padding: 1rem 1rem;
  background-color: transparent;
  color: #fff;
  border: 2px solid var(--bs-succes);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s linear;
}

.menu-back-button:hover,
.menu-back-button:focus {
  background: var(--bs-text-light);
  border: 2px solid var(--bs-text-light);
}
.menu-add-new {
  font-size: 0.8rem;
  padding: 0.5rem 0.5rem;
  background-color: transparent;
  color: #fff;
  border: 2px solid var(--bs-succes);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s linear;
  margin-bottom: 2rem;
}
.container-icons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.column {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}

.element {
  width: 65px;
  height: 65px;
  border: 3px solid #18202b;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.element:hover {
  border-color: var(--bs-succes);
  cursor: pointer;
}

.fa {
  font-size: 10px;
}

.bi-trash {
  position: relative;
  float: right;
  margin-right: 10px;
  width: 20px;
  height: 20px;
}
.bi {
  width: 30px;
  height: 30px;
  color: white;
}
.border-around {
  margin-top: 10px;
}
.scroll {
  height: 600px;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #090c0f;
  padding: 8rem;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
.remove-focus:focus {
  outline: none;
}

.highlight {
  border: 6px solid var(--bs-succes);
}
</style>
