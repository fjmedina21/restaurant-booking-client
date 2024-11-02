import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {registerLicense} from '@syncfusion/ej2-base'
import { AppModule } from './app/app.module';

registerLicense('ORg4AjUWIQA/Gnt2UlhhQlVMfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX9SdkdiWn5XdH1RRWFU'); // Add your Syncfusion license key here
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
