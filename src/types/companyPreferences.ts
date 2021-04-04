type CompanyPreferences = {
  id?: number;
  leadTimeWindow: number;
  schedulingWindow: number;
  cancellationWindow: number;
  facebookLink: string;
  instagramLink: string;
  websiteLink: string;
  termsText: string;
  showTerms: boolean;
  hasSexPick: boolean;
  hasBorders: boolean;
  hasDarkMode: boolean;
  hasStaffPick: boolean;
  colorVariant: string;
  canCancel: boolean;
  clientReminderEmail: boolean;
  staffReminderEmail: boolean;
  staffCancellationNotice: boolean;
  isTutorialFinished: boolean;
  clientReminderTime: number;
  staffReminderTime: number;
  showRules: boolean;
  rules: string;
}

export default CompanyPreferences;
