<!-- ╔══════════════════════════════ BEG ══════════════════════════════╗ -->

<br>
<div align="center">
    <p>
        <img src="./assets/img/logo.png" alt="logo" style="" height="60" />
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/v-0.0.1-black"/>
    <a href="https://github.com/mineui-org"><img src="https://img.shields.io/badge/🔥-@mineui-black"/></a>
    <br>
    <img src="https://img.shields.io/github/issues/mineui-orgz/semantic?style=flat" alt="Github Repo Issues" />
    <img src="https://img.shields.io/github/stars/mineui-orgz/semantic?style=social" alt="GitHub Repo stars" />
</div>
<br>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ DOC ══════════════════════════════╗ -->

- ## Overview 👀

    - #### Why ?
        > Semantic variables that give meaning to design tokens. Built-in light/dark themes, auto theme switching, RTL/LTR support, and component-specific tokens. Uses CSS custom properties for runtime theming.

    - #### When ?
        > Use on top of @mineui/tokens to create themeable, accessible UI components. Perfect for apps that need dark mode, RTL support, or custom branding.

    <br>
    <br>

- ## Quick Start 🔥

    > install [`hmm`](https://github.com/minejs-org/hmm) first.

    ```bash
    # in your terminal
    hmm i @mineui/semantic @mineui/tokens
    ```

    ```scss
    # in your `.scss` files
    @use "./node_modules/@mineui/semantic/dist/scss/index.scss" as *;
    ```

    <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
    <br>


    - ### Theme System

        ```html
        <!-- Light Theme (Default) -->
        <body>
          <div style="background: var(--bg-surface); color: var(--text-1)">
            Hello World
          </div>
        </body>

        <!-- Dark Theme -->
        <body data-theme="dark">
          <!-- Colors switch automatically -->
        </body>

        <!-- Auto Theme (System Preference) -->
        <body>
          <!-- Follows user's OS preference -->
        </body>
        ```

    - ### Semantic Colors

        ```scss
        .button {
          background    : var(--brand);
          color         : var(--text-inverse);
          border        : 1px solid var(--border-1);

          &:hover {
            background  : var(--brand-hover);
          }

          &:disabled {
            opacity     : var(--disabled-opacity);
          }
        }
        ```

    <br>
    <br>

- ## Documentation 📑


    - ### API ⛓️

        - #### Background Colors
            > Semantic background values that adapt to theme.

            ```css
            --bg-page         /* Page background */
            --bg-surface      /* Surface background (cards, panels) */
            --bg-raised       /* Elevated surfaces */
            --bg-overlay      /* Modal/dropdown overlays */
            --bg-code         /* Code blocks */
            ```

        - #### Text Colors

            > Hierarchical text colors.

            ```css
            --text-1          /* Primary text */
            --text-2          /* Secondary text */
            --text-3          /* Tertiary text */
            --text-4          /* Disabled text */
            --text-inverse    /* Inverse text (on dark backgrounds) */
            --text-link       /* Link color */
            --text-link-hover /* Link hover color */
            ```

        - #### Border Colors

            > Border colors for different contexts.

            ```css
            --border-1        /* Primary borders */
            --border-2        /* Secondary borders */
            --border-3        /* Subtle borders */
            --border-focus    /* Focus ring color */
            ```

        - #### Brand Colors

            > Primary brand color with states.

            ```css
            --brand           /* Base brand color */
            --brand-hover     /* Hover state */
            --brand-active    /* Active state */
            --brand-subtle    /* Subtle background */
            --brand-text      /* Brand text color */
            ```

        - #### Status Colors

            > Success, warning, error, info with states.

            ```css
            /* Success */
            --success,
            --success-hover,  --success-active,
            --success-subtle, --success-text

            /* Warning */
            --warning,
            --warning-hover,  --warning-active,
            --warning-subtle, --warning-text

            /* Error */
            --error,
            --error-hover,  --error-active,
            --error-subtle, --error-text

            /* Info */
            --info,
            --info-hover,  --info-active,
            --info-subtle, --info-text
            ```

        - #### Shadows

            > Theme-aware shadows.

            ```css
            --shadow-xs, --shadow-sm, --shadow-md,
            --shadow-lg, --shadow-xl
            ```

        - #### Component Tokens

            > Pre-configured values for common components.

            ```css
            /* Button */
            --btn-h-sm,  --btn-h-md,  --btn-h-lg
            --btn-px-sm, --btn-px-md, --btn-px-lg

            /* Input */
            --input-h-sm,  --input-h-md,  --input-h-lg
            --input-px-sm, --input-px-md, --input-px-lg

            /* Card */
            --card-padding,  --card-radius, --card-shadow

            /* Modal */
            --modal-padding, --modal-radius, --modal-shadow

            /* And more... */
            ```

        - #### Mixins

            > Helpful SCSS mixins.

            ```scss
            // Theme-aware property
            @include theme(background, $light-val, $dark-val);

            // RTL support
            @include rtl { /* RTL styles */ }
            @include ltr { /* LTR styles */ }

            // Focus ring
            @include focus-ring;

            // States
            @include hover { /* hover styles */ }
            @include active { /* active styles */ }
            @include disabled { /* disabled styles */ }
            ```

        - #### Functions

            > Helper functions.

            ```scss
            // Get semantic color
            background: color(brand);

            // Calculate spacing
            padding: space(4);  // 1rem
            ```

        <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
        <br>

    - ### Examples 💡

        - #### Theme Switching (JavaScript)

            ```javascript
            // Toggle theme
            function toggleTheme() {
              const html    = document.documentElement;
              const current = html.getAttribute('data-theme');
              const next    = current === 'dark' ? 'light' : 'dark';

              html.setAttribute('data-theme', next);
              localStorage.setItem('theme', next);
            }

            // Load saved theme
            const saved = localStorage.getItem('theme');
            if (saved) {
              document.documentElement.setAttribute('data-theme', saved);
            }
            ```

        - #### RTL Support

            ```html
            <!-- English (LTR) -->
            <html dir="ltr" lang="en">

            <!-- Arabic (RTL) -->
            <html dir="rtl" lang="ar">
            ```

        - #### Custom Component

            ```scss
            @use '@mineui/semantic' as *;

            .custom-button {
              height        : var(--btn-h-md);
              padding       : 0 var(--btn-px-md);
              background    : var(--brand);
              color         : var(--text-inverse);
              border        : 1px solid var(--border-1);
              border-radius : var(--btn-radius);
              font-size     : var(--btn-font-md);
              font-weight   : var(--btn-weight);
              transition    : var(--transition-fast);

              @include hover {
                background  : var(--brand-hover);
                box-shadow  : var(--shadow-sm);
              }

              @include disabled {
                cursor: not-allowed;
              }

              @include focus-ring;
            }
            ```

    - ### Related 🔗

        - ##### [@mineui/tokens](https://github.com/mineui-org/tokens)
            > Design tokens used by this package

        - ##### [@mineui/core](https://github.com/mineui-org/core)
            > Complete UI framework built on semantic system

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ END ══════════════════════════════╗ -->

<br>
<br>

---

<div align="center">
    <a href="https://github.com/maysara-elshewehy"><img src="https://img.shields.io/badge/by-Maysara-black"/></a>
</div>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->