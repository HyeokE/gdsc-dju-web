import React from 'react';
import { Route, Routes } from 'react-router';

export default (
  <Routes>
    <Route path={'/'} />
    <Route path={'/introduce'} />
    <Route path={'/recruit'} />
    <Route path={'/recruit/:id'} />
    <Route path={'/faq'} />
    <Route path={'/auth'} />
    <Route path={'/admin'} />
  </Routes>
);
