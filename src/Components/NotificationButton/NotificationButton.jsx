// import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function NotificationButton() {
  return (
    <div className="me-2">
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
    </div>
  );
}
