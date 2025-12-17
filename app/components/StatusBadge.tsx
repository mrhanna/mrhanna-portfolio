const statuses = {
  completed: '🟢 Completed',
  'in-progress': '🚧 In progress',
  shelved: '🛑 Permanently shelved',
} as const;

export type Status = keyof typeof statuses;

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <div
      aria-hidden="true"
      className="text-black bg-white inline-block rounded-lg shadow-xs hover:shadow-md font-bold text-sm py-1 px-2 relative z-10"
    >
      {statuses[status]}
    </div>
  );
}
