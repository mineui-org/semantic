<!-- ╔══════════════════════════════ BEG ══════════════════════════════╗ -->

<br>
<div align="center">
    <p>
        <img src="./assets/img/logo.png" alt="logo" style="" height="60" />
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/v-0.0.5-black"/>
    <a href="https://github.com/mineui-org"><img src="https://img.shields.io/badge/🔥-@mineui-black"/></a>
    <br>
    <img src="https://img.shields.io/github/issues/mineui-org/semantic?style=flat" alt="Github Repo Issues" />
    <img src="https://img.shields.io/github/stars/mineui-org/semantic?style=social" alt="GitHub Repo stars" />
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

        - #### Root Variables

            | Variable             | Light            | Dark             | Description              |
            | -------------------- | ---------------- | ---------------- | ------------------------ |
            | `--dir`              | `ltr`            | `ltr`            | Text direction           |
            | `--start`            | `left`           | `left`           | Start side (directional) |
            | `--end`              | `right`          | `right`          | End side (directional)   |
            | `--unit`             | `0.25rem`        | `0.25rem`        | Base spacing unit        |
            | `--font-base`        | Sans             | Sans             | Default font family      |
            | `--font-heading`     | Sans             | Sans             | Heading font family      |
            | `--font-mono`        | Mono             | Mono             | Monospace font family    |
            | `--font-size-base`   | `1rem`           | `1rem`           | Base font size           |
            | `--line-height-base` | `1.5`            | `1.5`            | Base line height         |
            | `--transition-fast`  | `150ms ease-out` | `150ms ease-out` | Fast transition          |
            | `--transition-base`  | `300ms ease-out` | `300ms ease-out` | Standard transition      |
            | `--transition-slow`  | `500ms ease-out` | `500ms ease-out` | Slow transition          |
            | `--radius`           | `0.5rem`         | `0.5rem`         | Base border radius       |

        - #### Background Colors

            | Variable       | Light   | Dark    | Purpose                            |
            | -------------- | ------- | ------- | ---------------------------------- |
            | `--bg-page`    | Gray 0  | Gray 11 | Page background                    |
            | `--bg-surface` | Gray 0  | Gray 10 | Surface background (cards, panels) |
            | `--bg-raised`  | Gray 1  | Gray 9  | Elevated surfaces                  |
            | `--bg-overlay` | HSL 10% | HSL 0%  | Modal/dropdown overlays            |
            | `--bg-code`    | Gray 1  | Gray 9  | Code blocks                        |

        - #### Text Colors

            | Variable            | Light   | Dark    | Hierarchy                     |
            | ------------------- | ------- | ------- | ----------------------------- |
            | `--text-1`          | Gray 11 | Gray 0  | Primary text                  |
            | `--text-2`          | Gray 8  | Gray 3  | Secondary text                |
            | `--text-3`          | Gray 6  | Gray 5  | Tertiary text                 |
            | `--text-4`          | Gray 5  | Gray 6  | Disabled text                 |
            | `--text-inverse`    | Gray 0  | Gray 11 | Inverse (on dark backgrounds) |
            | `--text-link`       | Blue 6  | Blue 4  | Link color                    |
            | `--text-link-hover` | Blue 7  | Blue 3  | Link hover state              |

        - #### Border Colors

            | Variable         | Light  | Dark   | Context           |
            | ---------------- | ------ | ------ | ----------------- |
            | `--border-1`     | Gray 3 | Gray 8 | Primary borders   |
            | `--border-2`     | Gray 4 | Gray 7 | Secondary borders |
            | `--border-3`     | Gray 5 | Gray 6 | Subtle borders    |
            | `--border-focus` | Blue 6 | Blue 5 | Focus ring color  |

        - #### Brand Colors

            | Variable         | Light  | Dark    | State             |
            | ---------------- | ------ | ------- | ----------------- |
            | `--brand`        | Blue 6 | Blue 5  | Base brand color  |
            | `--brand-hover`  | Blue 7 | Blue 4  | Hover state       |
            | `--brand-active` | Blue 8 | Blue 3  | Active state      |
            | `--brand-subtle` | Blue 1 | Blue 11 | Subtle background |
            | `--brand-text`   | Blue 6 | Blue 4  | Brand text color  |

        - #### Status Colors

            | Variable           | Light   | Dark     | Semantic          |
            | ------------------ | ------- | -------- | ----------------- |
            | `--success`        | Green 6 | Green 5  | Success color     |
            | `--success-hover`  | Green 7 | Green 4  | Success hover     |
            | `--success-active` | Green 8 | Green 3  | Success active    |
            | `--success-subtle` | Green 1 | Green 11 | Success subtle bg |
            | `--success-text`   | Green 7 | Green 4  | Success text      |
            | `--warning`        | Amber 6 | Amber 5  | Warning color     |
            | `--warning-hover`  | Amber 7 | Amber 4  | Warning hover     |
            | `--warning-active` | Amber 8 | Amber 3  | Warning active    |
            | `--warning-subtle` | Amber 1 | Amber 11 | Warning subtle bg |
            | `--warning-text`   | Amber 8 | Amber 4  | Warning text      |
            | `--error`          | Red 6   | Red 5    | Error color       |
            | `--error-hover`    | Red 7   | Red 4    | Error hover       |
            | `--error-active`   | Red 8   | Red 3    | Error active      |
            | `--error-subtle`   | Red 1   | Red 11   | Error subtle bg   |
            | `--error-text`     | Red 7   | Red 4    | Error text        |
            | `--info`           | Cyan 6  | Cyan 5   | Info color        |
            | `--info-hover`     | Cyan 7  | Cyan 4   | Info hover        |
            | `--info-active`    | Cyan 8  | Cyan 3   | Info active       |
            | `--info-subtle`    | Cyan 1  | Cyan 11  | Info subtle bg    |
            | `--info-text`      | Cyan 7  | Cyan 4   | Info text         |

        - #### Shadow Scales

            | Variable      | Light       | Dark               | Use Case            |
            | ------------- | ----------- | ------------------ | ------------------- |
            | `--shadow-xs` | Extra small | Extra small (dark) | Subtle elevation    |
            | `--shadow-sm` | Small       | Small (dark)       | Light elevation     |
            | `--shadow-md` | Medium      | Medium (dark)      | Standard elevation  |
            | `--shadow-lg` | Large       | Large (dark)       | Prominent elevation |
            | `--shadow-xl` | Extra large | Extra large (dark) | Maximum elevation   |

        - #### State Opacity

            | Variable             | Light | Dark  | Purpose                |
            | -------------------- | ----- | ----- | ---------------------- |
            | `--hover-opacity`    | `10%` | `20%` | Hover state opacity    |
            | `--active-opacity`   | `20%` | `30%` | Active state opacity   |
            | `--disabled-opacity` | `40%` | `50%` | Disabled state opacity |

        - #### Input Variables

            | Variable              | Light   | Dark    | Context          |
            | --------------------- | ------- | ------- | ---------------- |
            | `--input-bg`          | Gray 0  | Gray 10 | Input background |
            | `--input-border`      | Gray 3  | Gray 8  | Input border     |
            | `--input-text`        | Gray 11 | Gray 0  | Input text       |
            | `--input-placeholder` | Gray 5  | Gray 6  | Placeholder text |

        - #### SCSS Mixins

            | Mixin        | Signature                                  | Description                   |
            | ------------ | ------------------------------------------ | ----------------------------- |
            | `theme`      | `@include theme($property, $light, $dark)` | Apply theme-aware values      |
            | `rtl`        | `@include rtl { }`                         | RTL-specific styles           |
            | `ltr`        | `@include ltr { }`                         | LTR-specific styles           |
            | `focus-ring` | `@include focus-ring`                      | Standard focus indicator      |
            | `hover`      | `@include hover { }`                       | Hover state (auto transition) |
            | `active`     | `@include active { }`                      | Active state styles           |
            | `disabled`   | `@include disabled { }`                    | Disabled state styles         |

        - #### SCSS Functions

            | Function  | Example        | Returns                 |
            | --------- | -------------- | ----------------------- |
            | `color()` | `color(brand)` | `var(--brand)`          |
            | `space()` | `space(4)`     | `calc(var(--unit) * 4)` |

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