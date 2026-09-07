import Link from "next/link";

const COURSES = [
  {
    label: "Courses",
    badge: "LIVE",
    badgeColor: "bg-violet-500",
    bgColor: "bg-violet-50",
    icon: <PlayIcon />,
    href: "/courses",
  },
  {
    label: "Classroom",
    bgColor: "bg-emerald-50",
    icon: <ClassroomIcon />,
    href: "/courses",
  },
  {
    label: "Self Study",
    bgColor: "bg-sky-50",
    icon: <FolderIcon />,
    href: "/courses",
  },
  {
    label: "Test Series",
    bgColor: "bg-blue-50",
    icon: <MonitorIcon />,
    href: "https://classplusapp.com/",
  },
];

export default function ExploreCourses() {
  return (
    <section className="w-full bg-[#edf2fa] py-12">
      <div className="mx-auto max-w-container px-4 lg:px-8">
        <h2 className="mb-6 text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Explore Courses
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {COURSES.map((course) => (
            <Link
              key={course.label}
              href={course.href}
              target={course.href.startsWith("http") ? "_blank" : undefined}
              rel={course.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex flex-col items-start gap-5 rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-md sm:p-6"
            >
              <span
                className={`relative flex h-12 w-12 items-center justify-center rounded-xl ${course.bgColor}`}
              >
                {course.icon}
                {course.badge && (
                  <span
                    className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-1.5 py-[1px] text-[8px] font-bold text-white ${course.badgeColor}`}
                  >
                    {course.badge}
                  </span>
                )}
              </span>
              <span className="text-base font-bold text-gray-900 sm:text-lg">
                {course.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M7 5.5v13l11-6.5-11-6.5Z" fill="#7C3AED" />
    </svg>
  );
}

function ClassroomIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="12" rx="2" fill="#10B981" />
      <rect x="3" y="5" width="18" height="12" rx="2" stroke="#0FA968" strokeWidth="0.5" />
      <path d="M9 19h6" stroke="#0FA968" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 9h10M7 12h6" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7Z"
        fill="#0EA5E9"
      />
      <path d="M9.5 11.5l3 2-3 2v-4Z" fill="white" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="12" rx="2" fill="#1456E8" />
      <path d="M9 21h6M12 17v4" stroke="#1456E8" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 13l2.5-2.5L12 12l3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="8.2" r="1" fill="white" />
    </svg>
  );
}
