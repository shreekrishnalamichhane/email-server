export type T_EmailLoginOTP = {
  from: string;
  to: string;
  subject: string;
  veloronaLogo: string;
  userName: string;
  code: string;
  expireDuration: number;
};

export type T_EmailForgotPassword = {
  from: string;
  to: string;
  subject: string;
  veloronaLogo: string;
  userName: string;
  code: string;
};

export type T_EmailChangePassword = {
  from: string;
  to: string;
  subject: string;
  veloronaLogo: string;
  userName: string;
};

export type T_EmailUserCreate = {
  from: string;
  to: string;
  subject: string;
  companyName: string;
  companyLogo: string;
  userName: string;
  password: string;
  loginLink: string;
};

export type T_EmailUserInvite = {
  from: string;
  to: string;
  subject: string;
  companyName: string;
  companyLogo: string;
  userName: string;
  userAvatar: string;
  role: string;
  invitationLink: string;
};

export type T_EmailCompanyRegister = {
  from: string;
  to: string;
  subject: string;
  veloronaLogo: string;
  companyName: string;
  companyAdminEmail: string;
  loginLink: string;
};

export type T_EmailCompanyVerificationReceivedMail = {
  from: string;
  to: string;
  subject: string;
  companyLogo: string;
  companyName: string;
};

export type T_EmailCompanyVerificationApprovedMail = {
  from: string;
  to: string;
  subject: string;
  companyLogo: string;
  companyName: string;
};

export type T_EmailCompanyVerificationRejectedMail = {
  from: string;
  to: string;
  subject: string;
  companyLogo: string;
  companyName: string;
  reason: string;
};

export type T_EmailCompanySubscriptionUpgradeMail = {
  from: string;
  to: string;
  subject: string;
  companyLogo: string;
  companyName: string;
};

export type T_EmailCompanySubscriptionDowngradeMail = {
  from: string;
  to: string;
  subject: string;
  companyLogo: string;
  companyName: string;
};

export type T_EmailCompanySubscriptionRenewMail = {
  from: string;
  to: string;
  subject: string;
  companyLogo: string;
  companyName: string;
};
