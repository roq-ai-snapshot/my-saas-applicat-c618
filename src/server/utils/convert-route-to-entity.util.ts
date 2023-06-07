const mapping: Record<string, string> = {
  bookings: 'booking',
  companies: 'company',
  tables: 'table',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
