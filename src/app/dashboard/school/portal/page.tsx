'use client'; // Ensure it's a Client Component

import React from 'react';
import { ClassSettingsTable } from '../../../../components/dashboard/school/portal/class-settings'; // Absolute Import

export default function SettingsPage() {
  const classes = [
    { id: '1', name: 'SS 2' },
    { id: '2', name: 'Primary 3' },
    { id: '3', name: 'Primary 4' },
    { id: '4', name: 'Basic 1' },
    { id: '5', name: 'Grade 2' },
  ];

  return (
    <div>
      <h1>Class Settings</h1>
      <ClassSettingsTable rows={classes} count={classes.length} page={0} rowsPerPage={5} />
    </div>
  );
}
