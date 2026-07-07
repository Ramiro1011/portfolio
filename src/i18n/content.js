export const content = {
  en: {
    nav: {
      links: [
        { id: "about", label: "About" },
        { id: "stack", label: "Stack" },
        { id: "work", label: "Work" },
        { id: "contact", label: "Contact" },
      ],
      langToggle: "ES",
    },
    hero: {
      location: "Buenos Aires, Argentina",
      title: "Ramiro Arago",
      role: "Backend Developer · Java, Spring Boot, React",
      pitchLead: "Two years building real systems end to end.",
      pitchPoints: [
        "A multi-tenant SaaS as my thesis.",
        "A system in production today for a real client.",
      ],
      pitchClose:
        "I care about the decisions behind the code as much as the code itself.",
      ctaPrimary: "View work",
      ctaSecondary: "Get in touch",
    },
    about: {
      label: "01 · About",
      paragraphs: [
        "I'm a Software Development technician (UADE, 2026), but most of what I actually know I learned by building systems that other people ended up using, and keeping them running when something broke with real data inside. I care less about whether something merely works, and more about understanding why it's built the way it is.",
        "Backend is my strong suit. What pulls me in is the decisions that never show up in a demo: how errors behave in production versus dev, how a schema migrates safely, what a DTO is really protecting. I build the frontend too, whatever the project needs.",
      ],
    },
    stack: {
      label: "02 · Stack",
      intro: "The tools I reach for, laid out by where they live in a system.",
      filterLabel: "Light up the stack of:",
      hint: "Hover a project to see the tools it's built from, layer by layer.",
      projects: [
        { id: "consultorio", label: "Consultorio" },
        { id: "tinta", label: "Tinta Total" },
        { id: "muebles", label: "Muebles" },
      ],
      layers: [
        {
          name: "Frontend",
          items: [
            { name: "React 19", in: ["tinta"] },
            { name: "Vite", in: ["tinta", "muebles"] },
            { name: "SvelteKit", in: ["muebles"] },
            { name: "JavaScript", in: ["tinta", "muebles"] },            { name: "Thymeleaf", in: ["consultorio"] },
            { name: "Bootstrap", in: ["consultorio"] },
            { name: "Axios", in: ["tinta"] },
          ],
        },
        {
          name: "Backend",
          primary: true,
          items: [
            { name: "Java 17", in: ["consultorio", "tinta"] },
            { name: "Spring Boot 3", in: ["consultorio", "tinta"] },
            { name: "Spring Security 6", in: ["consultorio", "tinta"] },
            { name: "Spring Data JPA", in: ["consultorio", "tinta"] },
            { name: "JWT", in: ["tinta"] },
            { name: "Maven", in: ["consultorio", "tinta"] },
            { name: "Flyway", in: ["consultorio", "tinta"] },
          ],
        },
        {
          name: "Data",
          items: [
            { name: "PostgreSQL", in: ["consultorio"] },
            { name: "MySQL", in: ["tinta"] },
          ],
        },
        {
          name: "Infra & tools",
          items: [
            { name: "Docker", in: ["consultorio"] },
            { name: "Git", in: ["consultorio", "tinta", "muebles"] },
            { name: "GitHub Actions", in: ["muebles"] },
            { name: "Firebase", in: ["muebles"] },
          ],
        },
      ],
    },
    projects: {
      label: "03 · Work",
      intro:
        "Three systems I built end to end, with the how and the why behind each.",
      items: [
        {
          name: "Consultorio Médico Privado",
          meta: "2026 · Delivered to a private client",
          tagline: "Management system for a private medical practice",
          description:
            "A full system for a private medical practice: managing professionals, patients and weekly availability, assigning appointments with business-rule validation, recording payments, and generating PDF receipts. Built with Java 17, Spring Boot 3 and PostgreSQL, with a server-rendered Thymeleaf + Bootstrap frontend. Delivered to the client with deploy docs.",
          decisions: [
            "Dev/prod profiles with different schema-management behavior",
            "Spring Security 6 hardening: CSRF, session-fixation protection, security headers",
            "Strict DTO pattern: no JPA entity ever reaches the client",
            "PDF receipt generation and automated pg_dump backups to local storage and Google Drive",
            "Docker multi-stage deploy, handed off with deploy documentation",
          ],
          tags: ["Java", "Spring Boot", "PostgreSQL", "Thymeleaf", "Bootstrap", "Docker"],
          links: {},
          gallery: {
            hint: "Pick a view",
            shots: [
              { src: "/consultorio/panel.png", label: "Dashboard", alt: "Dashboard with appointment, patient and professional KPIs", path: "consultorio / inicio", theme: "Light" },
              { src: "/consultorio/agenda-dia.png", label: "Day agenda · a professional's appointments", alt: "Daily agenda with booked appointments, showing completed, no-show and reserved states", path: "consultorio / agenda / día", theme: "Light" },
              { src: "/consultorio/calendario.png", label: "Monthly calendar", alt: "Monthly agenda calendar for a professional", path: "consultorio / agenda", theme: "Light" },
              { src: "/consultorio/pacientes.png", label: "Patients", alt: "Patient list with insurance and phone number", path: "consultorio / pacientes", theme: "Light" },
              { src: "/consultorio/profesionales.png", label: "Professionals", alt: "Professionals list with specialties and license numbers", path: "consultorio / profesionales", theme: "Light" },
              { src: "/consultorio/agenda-dia-oscuro.png", label: "Day agenda · dark mode", alt: "Daily agenda in dark mode", path: "consultorio / agenda / día", theme: "Dark" },
              { src: "/consultorio/panel-oscuro.png", label: "Dashboard · dark mode", alt: "Dashboard in dark mode", path: "consultorio / inicio", theme: "Dark" },
            ],
          },
        },
        {
          name: "Tinta Total",
          meta: "2024 – 2026 · Thesis project",
          tagline: "Multi-tenant SaaS for paint store chains · thesis project, never deployed",
          description:
            "A from-scratch reimagining of a paint store management system as a proper multi-tenant SaaS: one codebase serving a head office and any number of independent branches, each on its own MySQL schema. Built over two years for my thesis. It never reached a real deployment, but the architecture was built to hold up if it had.",
          decisions: [
            "Database-per-tenant: an AbstractRoutingDataSource picks the connection per request from a ThreadLocal TenantContext",
            "New branches provision live: Flyway runs its migrations on the new schema and the tenant registers in memory, no restart",
            "JWT (HMAC-SHA512) + BCrypt, with a token-version claim that invalidates old tokens on logout",
            "Three-role permission model (Admin / Encargado / Empleado) enforced per endpoint",
            "Builder + Director + Registry pattern for product entities that differ by context: shared catalog vs. per-branch overrides",
            "React 19 + Vite frontend with an Axios interceptor that refreshes the JWT proactively, before it expires",
          ],
          tags: ["Java", "Spring Boot", "MySQL", "JWT", "React", "Multi-tenant"],
          links: {},
          gallery: {
            note: "Interface design · high-fidelity wireframes of the system.",
            hint: "Pick a screen",
            shots: [
              { src: "/tinta-total/dashboard.png", label: "Dashboard · head office", alt: "Head-office dashboard with order, revenue and active-branch KPIs and best-selling products", path: "tinta-total / dashboard", theme: "Wireframe" },
              { src: "/tinta-total/catalogo.png", label: "Paint catalog", alt: "Paint catalog table with type, base color, can size, price and tags", path: "tinta-total / catálogo", theme: "Wireframe" },
              { src: "/tinta-total/calculadora.png", label: "Paint calculator", alt: "Paint calculator with type, area and coats, returning liters and suggested can", path: "tinta-total / calculadora", theme: "Wireframe" },
              { src: "/tinta-total/pedidos.png", label: "Orders", alt: "Order management list with client, date, status, payment method and total", path: "tinta-total / pedidos", theme: "Wireframe" },
              { src: "/tinta-total/stock.png", label: "Stock by branch", alt: "Per-branch stock management view", path: "tinta-total / stock", theme: "Wireframe" },
              { src: "/tinta-total/sucursales.png", label: "Branches", alt: "Branch management with summary cards", path: "tinta-total / sucursales", theme: "Wireframe" },
            ],
          },
          showcase: {
            heading: "A system that spins up new branches without shutting down.",
            lede:
              "Tinta Total is a multi-tenant SaaS: one head office and any number of branches, each with its own database. The interesting part isn't that it does this. It's how.",
            architecture: {
              eyebrow: "Architecture",
              title: "One head office, N independent branches",
              centralRole: "Head office",
              centralSub: "master catalog · branches · global users",
              dbLabel: "own db",
              branchLabel: "Branch",
              branchLead: "Each branch runs, independently:",
              branchModules: ["stock", "prices", "sales", "user roles"],
              addButton: "+ Add branch",
              steps: [
                "Generates a unique tenant code",
                "Creates the branch's MySQL database",
                "Flyway runs the migrations on that schema",
                "Registers the DataSource live (ConcurrentHashMap + HikariCP)",
                "Branch is operational, taking orders",
              ],
              noRestart: "Zero server restarts",
            },
            flow: {
              eyebrow: "Inside",
              title: "What happens on every request",
              nodes: [
                { label: "React\nclient", detail: "React 19 + Vite, with an Axios interceptor that refreshes the JWT proactively, before it expires." },
                { label: "JWT +\nBCrypt", detail: "HMAC-SHA512 to sign the token, BCrypt to hash passwords, with a token-version claim that invalidates old sessions on logout." },
                { label: "Tenant\nResolver", detail: "Reads the X-Tenant-Id header, checks the user has permission over that branch, and stores the context in a ThreadLocal for the rest of the request." },
                { label: "Routing\nDataSource", detail: "Spring's AbstractRoutingDataSource picks the right connection from the active TenantContext. Each branch, its own database, decided at request time." },
                { label: "Branch\nDB", detail: "Each branch is an independent MySQL schema. One branch's data never mixes with another's." },
              ],
              hint: "Tap any node to see the decision behind it",
            },
            calc: {
              eyebrow: "Business tool · try it",
              title: "Paint-coverage calculator",
              note: "A greedy algorithm covers the surface by filling with the largest can sizes first and topping up the rest with smaller ones. Fast and good enough, not always the mathematical minimum.",
              fields: {
                surface: "Surface to paint",
                coats: "Coats",
                type: "Paint type",
                color: "Color",
                unitM2: "m²",
                yieldUnit: "m²/L",
              },
              types: [
                { name: "Interior latex", yield: 10, cans: [20, 10, 4, 1], colors: ["White", "Off-white", "Sky", "Sand", "Pearl grey", "Sage"] },
                { name: "Exterior latex", yield: 8, cans: [20, 10, 4], colors: ["White", "Navy blue", "English green", "Terracotta", "Cement grey", "Ochre"] },
                { name: "Synthetic enamel", yield: 12, cans: [4, 1], colors: ["Gloss white", "Black", "Grey", "Red", "Blue", "Aluminium"] },
                { name: "Sealer / primer", yield: 6, cans: [20, 10, 4], colors: ["Clear"] },
              ],
              defaults: { surface: 48, coats: 2, typeIndex: 0, colorIndex: 0 },
              result: {
                litersLabel: "Paint needed",
                cansLabel: "Buy",
                cansUnit: "cans",
                cansUnitOne: "can",
                boughtLabel: "Total in cans:",
              },
              benefits: [
                "The customer knows instantly how much paint to buy, with no guessing and no over-buying.",
                "Uses each paint type's real coverage, not a generic rule of thumb.",
                "Turns square meters into a closed quote in seconds, then exports straight to an order.",
              ],
            },
          },
        },
        {
          name: "Muebles Rafaela",
          tagline: "Furniture store catalog & admin panel · live in production, used daily",
          description:
            "An online catalog for a furniture store, with a full admin panel: supplier management, bulk price increases, and a price-change history. In production today, the store's own staff use it every day to manage the catalog. Visitors browse and contact the store on WhatsApp, no cart, no checkout, by design.",
          decisions: [
            "SvelteKit 5 + Vite, deployed on Cloudflare Workers",
            "The public site reads a static catalog JSON generated from Firestore; only the admin panel touches Firestore live, and publishing regenerates that JSON and redeploys.",
            "Firebase Firestore + Auth for data and the single-admin login",
            "Automated daily Firestore backup via GitHub Actions",
            "Cloudinary for image uploads (unsigned preset) and delivery",
          ],
          tags: ["SvelteKit", "Firebase", "Vite", "GitHub Actions"],
          links: {
            code: "https://github.com/Ramiro1011/muebles-rafaela",
          },
          demoCard: {
            src: "/muebles/catalogo.png",
            href: "https://muebles-rafaela.webstudio-ra.workers.dev/catalogo",
            label: "Open live site",
            alt: "Muebles Rafaela product catalog: category sidebar with counts, product cards with images and prices",
          },
        },
      ],
    },
    contact: {
      label: "04 · Contact",
      pitch:
        "Open to backend and fullstack roles. If something here is interesting, reach out.",
      links: [
        { label: "LinkedIn", value: "linkedin.com/in/ramiro-arago", href: "https://www.linkedin.com/in/ramiro-arago" },
        { label: "Email", value: "1011ramiroarago@gmail.com", href: "mailto:1011ramiroarago@gmail.com" },
        { label: "GitHub", value: "github.com/Ramiro1011", href: "https://github.com/Ramiro1011" },
        { label: "WhatsApp", value: "+54 9 2246 508518", href: "https://wa.me/5492246508518" },
      ],
    },
    footer: "Ramiro Arago · Built with React & Vite",
  },

  es: {
    nav: {
      links: [
        { id: "about", label: "Sobre mí" },
        { id: "stack", label: "Stack" },
        { id: "work", label: "Trabajos" },
        { id: "contact", label: "Contacto" },
      ],
      langToggle: "EN",
    },
    hero: {
      location: "Buenos Aires, Argentina",
      title: "Ramiro Arago",
      role: "Backend Developer · Java, Spring Boot, React",
      pitchLead: "Dos años construyendo sistemas reales de punta a punta.",
      pitchPoints: [
        "Un SaaS multi-tenant como proyecto de tesis.",
        "Un sistema en producción hoy para un cliente real.",
      ],
      pitchClose:
        "Me importan tanto las decisiones detrás del código como el código en sí.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Hablemos",
    },
    about: {
      label: "01 · Sobre mí",
      paragraphs: [
        "Soy técnico en Desarrollo de Software (UADE, 2026), pero casi todo lo que sé lo aprendí construyendo sistemas que otras personas terminaron usando, y sosteniéndolos cuando algo fallaba con datos reales adentro. Me importa menos que algo simplemente ande, y más entender por qué está hecho así.",
        "Mi punto fuerte es el backend. Lo que me atrapa son las decisiones que no se ven en una demo: cómo se comportan los errores en producción y en dev, cómo migra un schema sin romper nada, qué está protegiendo de verdad un DTO. El frontend lo hago también, lo que el proyecto pida.",
      ],
    },
    stack: {
      label: "02 · Stack",
      intro: "Las herramientas que uso, dispuestas por dónde viven en un sistema.",
      filterLabel: "Iluminá el stack de:",
      hint: "Pasá por un proyecto para ver, capa por capa, con qué está hecho.",
      projects: [
        { id: "consultorio", label: "Consultorio" },
        { id: "tinta", label: "Tinta Total" },
        { id: "muebles", label: "Muebles" },
      ],
      layers: [
        {
          name: "Frontend",
          items: [
            { name: "React 19", in: ["tinta"] },
            { name: "Vite", in: ["tinta", "muebles"] },
            { name: "SvelteKit", in: ["muebles"] },
            { name: "JavaScript", in: ["tinta", "muebles"] },            { name: "Thymeleaf", in: ["consultorio"] },
            { name: "Bootstrap", in: ["consultorio"] },
            { name: "Axios", in: ["tinta"] },
          ],
        },
        {
          name: "Backend",
          primary: true,
          items: [
            { name: "Java 17", in: ["consultorio", "tinta"] },
            { name: "Spring Boot 3", in: ["consultorio", "tinta"] },
            { name: "Spring Security 6", in: ["consultorio", "tinta"] },
            { name: "Spring Data JPA", in: ["consultorio", "tinta"] },
            { name: "JWT", in: ["tinta"] },
            { name: "Maven", in: ["consultorio", "tinta"] },
            { name: "Flyway", in: ["consultorio", "tinta"] },
          ],
        },
        {
          name: "Datos",
          items: [
            { name: "PostgreSQL", in: ["consultorio"] },
            { name: "MySQL", in: ["tinta"] },
          ],
        },
        {
          name: "Infra y tools",
          items: [
            { name: "Docker", in: ["consultorio"] },
            { name: "Git", in: ["consultorio", "tinta", "muebles"] },
            { name: "GitHub Actions", in: ["muebles"] },
            { name: "Firebase", in: ["muebles"] },
          ],
        },
      ],
    },
    projects: {
      label: "03 · Trabajos",
      intro:
        "Tres sistemas que construí de punta a punta, con el cómo y el porqué detrás de cada uno.",
      items: [
        {
          name: "Consultorio Médico Privado",
          meta: "2026 · Entregado a un cliente privado",
          tagline: "Sistema de gestión para un consultorio médico privado",
          description:
            "Un sistema completo para un consultorio médico privado: administración de profesionales, pacientes y disponibilidad semanal, asignación de turnos con validaciones de negocio, registro de cobros y generación de comprobantes en PDF. Construido con Java 17, Spring Boot 3 y PostgreSQL, con frontend server-side en Thymeleaf + Bootstrap. Entregado al cliente con documentación de deploy.",
          decisions: [
            "Perfiles dev/prod con comportamiento diferenciado en schema management",
            "Seguridad con Spring Security 6: CSRF, session fixation protection, headers HTTP",
            "Patrón DTO estricto: ninguna entidad JPA llega al cliente",
            "Generación de comprobantes en PDF y backups automáticos con pg_dump hacia almacenamiento local y Google Drive",
            "Deploy en Docker con build multi-stage, entregado con documentación",
          ],
          tags: ["Java", "Spring Boot", "PostgreSQL", "Thymeleaf", "Bootstrap", "Docker"],
          links: {},
          gallery: {
            hint: "Elegí una vista",
            shots: [
              { src: "/consultorio/panel.png", label: "Panel de control", alt: "Panel de control con métricas de turnos, pacientes y profesionales", path: "consultorio / inicio", theme: "Claro" },
              { src: "/consultorio/agenda-dia.png", label: "Agenda del día · turnos del profesional", alt: "Agenda diaria con turnos asignados, mostrando estados completado, ausente y reservado", path: "consultorio / agenda / día", theme: "Claro" },
              { src: "/consultorio/calendario.png", label: "Calendario mensual", alt: "Calendario mensual de la agenda de un profesional", path: "consultorio / agenda", theme: "Claro" },
              { src: "/consultorio/pacientes.png", label: "Pacientes", alt: "Listado de pacientes con obra social y teléfono", path: "consultorio / pacientes", theme: "Claro" },
              { src: "/consultorio/profesionales.png", label: "Profesionales", alt: "Listado de profesionales con especialidades y matrículas", path: "consultorio / profesionales", theme: "Claro" },
              { src: "/consultorio/agenda-dia-oscuro.png", label: "Agenda del día · modo oscuro", alt: "Agenda diaria en modo oscuro", path: "consultorio / agenda / día", theme: "Oscuro" },
              { src: "/consultorio/panel-oscuro.png", label: "Panel de control · modo oscuro", alt: "Panel de control en modo oscuro", path: "consultorio / inicio", theme: "Oscuro" },
            ],
          },
        },
        {
          name: "Tinta Total",
          meta: "2024 – 2026 · Proyecto de tesis",
          tagline: "SaaS multi-tenant para cadenas de pinturerías · proyecto de tesis, nunca desplegado",
          description:
            "Una reescritura desde cero de un sistema de gestión de pinturerías como un SaaS multi-tenant de verdad: un solo codebase sirviendo a una casa central y cualquier cantidad de sucursales independientes, cada una en su propio schema MySQL. Construido durante dos años para mi tesis. Nunca llegó a un despliegue real, pero la arquitectura se construyó para bancarlo si hubiera llegado.",
          decisions: [
            "Database-per-tenant: un AbstractRoutingDataSource elige la conexión por request desde un TenantContext en ThreadLocal",
            "Alta de sucursales en caliente: Flyway corre sus migraciones en el nuevo schema y el tenant se registra en memoria, sin reiniciar",
            "JWT (HMAC-SHA512) + BCrypt, con un claim de token-version que invalida tokens viejos al hacer logout",
            "Modelo de permisos de tres roles (Admin / Encargado / Empleado) validado por endpoint",
            "Patrón Builder + Director + Registry para entidades de producto que difieren según contexto: catálogo compartido vs. overrides por sucursal",
            "Frontend en React 19 + Vite con un interceptor de Axios que renueva el JWT de forma proactiva, antes de que expire",
          ],
          tags: ["Java", "Spring Boot", "MySQL", "JWT", "React", "Multi-tenant"],
          links: {},
          gallery: {
            note: "Diseño de interfaz · wireframes de alta fidelidad del sistema.",
            hint: "Elegí una pantalla",
            shots: [
              { src: "/tinta-total/dashboard.png", label: "Panel general · casa central", alt: "Dashboard de casa central con métricas de pedidos, facturación y sucursales activas y productos más vendidos", path: "tinta-total / dashboard", theme: "Wireframe" },
              { src: "/tinta-total/catalogo.png", label: "Catálogo de pinturas", alt: "Tabla de catálogo de pinturas con tipo, color base, tamaño de envase, precio y etiquetas", path: "tinta-total / catálogo", theme: "Wireframe" },
              { src: "/tinta-total/calculadora.png", label: "Calculadora de pintura", alt: "Calculadora de pintura con tipo, área y manos, devolviendo litros y lata sugerida", path: "tinta-total / calculadora", theme: "Wireframe" },
              { src: "/tinta-total/pedidos.png", label: "Gestión de pedidos", alt: "Listado de gestión de pedidos con cliente, fecha, estado, medio de pago y total", path: "tinta-total / pedidos", theme: "Wireframe" },
              { src: "/tinta-total/stock.png", label: "Stock por sucursal", alt: "Vista de gestión de stock por sucursal", path: "tinta-total / stock", theme: "Wireframe" },
              { src: "/tinta-total/sucursales.png", label: "Gestión de sucursales", alt: "Gestión de sucursales con tarjetas de resumen", path: "tinta-total / sucursales", theme: "Wireframe" },
            ],
          },
          showcase: {
            heading: "Un sistema que crea sucursales sin apagarse.",
            lede:
              "Tinta Total es un SaaS multi-tenant: una casa central y cualquier cantidad de sucursales, cada una con su propia base de datos. Lo interesante no es que lo haga. Es cómo lo hace.",
            architecture: {
              eyebrow: "Arquitectura",
              title: "Una central, N sucursales independientes",
              centralRole: "Casa central",
              centralSub: "catálogo maestro · sucursales · usuarios globales",
              dbLabel: "db propia",
              branchLabel: "Sucursal",
              branchLead: "Cada sucursal gestiona, independiente:",
              branchModules: ["stock", "precios", "ventas", "roles de usuarios"],
              addButton: "+ Agregar sucursal",
              steps: [
                "Genera un código único para el tenant",
                "Crea la base de datos MySQL de la sucursal",
                "Flyway corre las migraciones sobre ese schema",
                "Registra el DataSource en caliente (ConcurrentHashMap + HikariCP)",
                "Sucursal operativa, atendiendo pedidos",
              ],
              noRestart: "Cero reinicios del servidor",
            },
            flow: {
              eyebrow: "Por dentro",
              title: "Qué pasa en cada request",
              nodes: [
                { label: "Cliente\nReact", detail: "React 19 + Vite, con un interceptor de Axios que renueva el JWT de forma proactiva, antes de que expire." },
                { label: "JWT +\nBCrypt", detail: "HMAC-SHA512 para firmar el token, BCrypt para el hash de contraseñas, con un claim de token-version que invalida sesiones viejas al hacer logout." },
                { label: "Tenant\nResolver", detail: "Lee el header X-Tenant-Id, valida que el usuario tenga permiso sobre esa sucursal, y guarda el contexto en un ThreadLocal para el resto del request." },
                { label: "Routing\nDataSource", detail: "Un AbstractRoutingDataSource de Spring elige la conexión correcta según el TenantContext activo. Cada sucursal, su propia base, decidido en tiempo de request." },
                { label: "DB de la\nsucursal", detail: "Cada sucursal es un schema MySQL independiente. Los datos de una nunca se mezclan con los de otra." },
              ],
              hint: "Tocá cualquier nodo para ver la decisión detrás",
            },
            calc: {
              eyebrow: "Herramienta de negocio · probala",
              title: "Calculadora de rendimiento de pintura",
              note: "Un algoritmo greedy cubre la superficie llenando con las latas más grandes primero y completando el resto con las más chicas. Rápido y suficientemente bueno, no siempre el mínimo matemático.",
              fields: {
                surface: "Superficie a pintar",
                coats: "Manos",
                type: "Tipo de pintura",
                color: "Color",
                unitM2: "m²",
                yieldUnit: "m²/L",
              },
              types: [
                { name: "Látex interior", yield: 10, cans: [20, 10, 4, 1], colors: ["Blanco", "Blanco hueso", "Cielo", "Arena", "Gris perla", "Verde agua"] },
                { name: "Látex exterior", yield: 8, cans: [20, 10, 4], colors: ["Blanco", "Azul marino", "Verde inglés", "Terracota", "Gris cemento", "Ocre"] },
                { name: "Esmalte sintético", yield: 12, cans: [4, 1], colors: ["Blanco brillante", "Negro", "Gris", "Rojo", "Azul", "Aluminio"] },
                { name: "Fijador / sellador", yield: 6, cans: [20, 10, 4], colors: ["Incoloro"] },
              ],
              defaults: { surface: 48, coats: 2, typeIndex: 0, colorIndex: 0 },
              result: {
                litersLabel: "Pintura necesaria",
                cansLabel: "Comprar",
                cansUnit: "latas",
                cansUnitOne: "lata",
                boughtLabel: "Total en latas:",
              },
              benefits: [
                "El cliente sabe al instante cuánta pintura comprar, sin adivinar ni comprar de más.",
                "Usa el rendimiento real de cada tipo de pintura, no una regla genérica.",
                "Convierte metros cuadrados en un presupuesto cerrado en segundos, y se exporta directo a un pedido.",
              ],
            },
          },
        },
        {
          name: "Muebles Rafaela",
          tagline: "Catálogo de mueblería y panel admin · en producción, uso diario",
          description:
            "Catálogo online para una mueblería, con panel de administración completo: gestión de proveedores, aumento masivo de precios e historial de cambios de precio. En producción hoy, el personal de la mueblería lo usa todos los días para gestionar el catálogo. Los visitantes navegan y consultan por WhatsApp, sin carrito ni checkout, a propósito.",
          decisions: [
            "SvelteKit 5 + Vite, desplegado en Cloudflare Workers",
            "El sitio público lee un JSON de catálogo estático generado desde Firestore; solo el panel de admin toca Firestore en vivo, y al publicar se regenera ese JSON y se redeploya.",
            "Firebase Firestore + Auth para los datos y el login del único admin",
            "Backup diario automático de Firestore vía GitHub Actions",
            "Cloudinary para la subida de imágenes (preset unsigned) y su entrega",
          ],
          tags: ["SvelteKit", "Firebase", "Vite", "GitHub Actions"],
          links: {
            code: "https://github.com/Ramiro1011/muebles-rafaela",
          },
          demoCard: {
            src: "/muebles/catalogo.png",
            href: "https://muebles-rafaela.webstudio-ra.workers.dev/catalogo",
            label: "Abrir sitio en vivo",
            alt: "Catálogo de Muebles Rafaela: barra de categorías con conteos, tarjetas de producto con imágenes y precios",
          },
        },
      ],
    },
    contact: {
      label: "04 · Contacto",
      pitch:
        "Abierto a roles backend y fullstack. Si algo de esto te interesa, escribime.",
      links: [
        { label: "LinkedIn", value: "linkedin.com/in/ramiro-arago", href: "https://www.linkedin.com/in/ramiro-arago" },
        { label: "Email", value: "1011ramiroarago@gmail.com", href: "mailto:1011ramiroarago@gmail.com" },
        { label: "GitHub", value: "github.com/Ramiro1011", href: "https://github.com/Ramiro1011" },
        { label: "WhatsApp", value: "+54 9 2246 508518", href: "https://wa.me/5492246508518" },
      ],
    },
    footer: "Ramiro Arago · Hecho con React y Vite",
  },
};
