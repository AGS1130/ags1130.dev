<template>
  <aside
    class="relative text-white bg-current md:h-full md:left-0 md:top-0 md:fixed"
  >
    <div
      class="background-img bg-center bg-no-repeat bg-cover inset-0 absolute"
    ></div>
    <div class="content-wrapper box-border relative md:table md:h-full md:w-full">
      <div class="content md:table-cell md:h-full md:align-middle">
        <div class="brand md:w-full md:mx-auto">
          <nuxt-link to="/" class="m-0 border-none"> <!-- <img/> --></nuxt-link>
          <h1 class="title text-white leading-tight font-bold m-0">
            <nuxt-link to="/">AGS1130</nuxt-link>
          </h1>
          <p class="description">Dev Blog</p>
        </div>
        <nav class="md:w-full" aria-label="Main Navigation">
          <ul class="menu m-0 p-0 list-none font-bold leading-normal">
            <li class="menu-item">
              <nuxt-link to="/">Home</nuxt-link>
            </li>
          </ul>
          <div class="social-links flex items-center flex-wrap">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener "
              class="button-circle"
            >
              <svg
                class="icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
                ></path>
              </svg>
              <span class="screen-reader-text">Twitter</span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener "
              class="button-circle"
            >
              <svg
                class="icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                ></path>
              </svg>
              <span class="screen-reader-text">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener "
              class="button-circle"
            >
              <svg
                class="icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                ></path>
              </svg>
              <span class="screen-reader-text">LinkedIn</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </aside>
</template>


<style lang="postcss" scoped>
aside {
  .background-img {
    &:before {
      @apply inset-0 absolute;
      content: "";
      background: linear-gradient(
        to bottom,
        rgba(17, 17, 17, 0) 0,
        rgba(17, 17, 17, 0.01) 1%,
        rgba(17, 17, 17, 0.7) 70%,
        rgba(17, 17, 17, 0.9) 100%
      );
    }
  }

  .content-wrapper {
    padding: 3.33333em 4vw;

    .content {
      .brand {
        margin-right: 45px;

        img {
          max-height: 60px;
        }

        .title {
          font-size: 1.66667rem;

          a {
            border-color: #ccc;
            color: inherit;
          }
        }

        .description {
          font-size: 1rem;
          font-style: italic;
          margin: 0.75em 0 0;
        }
      }

      nav {
        .menu {
          border-bottom: 1px dashed green;
        }

        .menu-item {
          border-top: 1px dashed green;
          padding: 0.5em 0;

          a {
            border: 0;
            color: inherit;
            display: inline-block;
          }
        }

        .menu-item a:hover,
        .current-menu-item a {
          color: yellow;
        }

        .social-links {
          margin-top: 2.5rem;

          a {
            color: inherit;
            margin: 0 5% 0.5em 0;

            &:not(.button-circle) {
              border: 0;

              &:hover {
                color: yellow;
              }
            }
          }

          .button-circle {
            font-size: 18px;

            &:hover {
              border-color: #ccc;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 801px) {
  aside {
    width: 30vw;

    .brand {
      max-width: 280px;
    }

    .site-logo {
      img {
        max-height: 120px;
      }
    }

    nav {
      margin: 2.5rem auto 0;
      max-width: 280px;
    }
  }
}

@media only screen and (min-width: 1001px) {
  .title {
    font-size: 1.88889rem;
  }
}

@media only screen and (min-width: 1501px) {
  aside {
    width: 450px;

    .content-wrapper {
      padding-left: 60px;
      padding-right: 60px;

      .title {
        font-size: 2.66667rem;
      }

      .description {
        font-size: 1.11111rem;
      }
    }
  }
}
</style>